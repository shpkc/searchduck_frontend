import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import axios from "axios";
import styled from "styled-components";


const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items: center;
  margin-top : 250px;
`
const Count = styled.div`
  font-size : 20px;
  font-bold : 100;
  margin-bottom: 30px;
`
const Price = styled.div`
   font-size : 20px;
   font-bold : 100;
    margin-bottom: 30px;
`
const ChangeButton = styled.button`
  width: 200px;
  height: 35px;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: #ae5fce
  text-align: center;
  margin-bottom: 30px;`

  const Dollar = styled.div`
  font-weight:600
  font-size : 20px;
  opacity: ${props => (props.watch == 1 ? "1" : "0")};
  transition: all 0.5s ease-in;

`

const exchangeEndpoint = "https://api.exchangeratesapi.io/latest?base=USD"

@inject('counter')
@observer

class Counter extends Component {
  state = {
    KRW : 1,
    Button : "실시간 USD로 변환",
    Opacity : 0
  }
  
  async componentDidMount() {
    let {data:{rates:{KRW}}} = await axios.get(exchangeEndpoint)
    this.setState({KRW: Math.floor(KRW)})
  }

  
  render() {
    const { counter, KRW } = this.props;
    
    return (
      <Wrapper>
        <Count>수량 : {counter.number}개</Count>
        <Price>총 가격 : {counter.total}원</Price>
        <ChangeButton onClick={()=>this.state.Button == "실시간 USD로 변환" ? this.setState({Button:"원화로 변환", Opacity:1}) : this.setState({Button:"실시간 USD로 변환", Opacity:0})}>
        {this.state.Button}
        </ChangeButton>
        <Dollar watch={this.state.Opacity}>{(counter.total / this.state.KRW).toFixed(2)}$</Dollar>
      </Wrapper>
    );
  }
}

export default Counter;