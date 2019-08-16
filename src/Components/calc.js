import React, {useState, useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import {toJS} from "mobx"
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
  opacity: ${props => (props.watch == 1 ? "0" : "1")};
  transition: all 0.5s ease-in;
` 
const Info = styled.div`
  color : blue;
  font-size : 14px;
  font-bold : 400
`


const Calc = ({Number, Total, InfoList, GetInfo, Rate, GetCapital}) => {

  const [KRW, changeKRW] = useState(1)
  const [Button, changeButton] = useState("실시간 USD로 변환")
  const [Opacity, changeOpacity] = useState(0);
  
  useEffect(()=>{
    GetCapital()
    GetInfo("rate")
  },[])

  let rate = toJS(Rate)
  let wordList = toJS(InfoList)

    return (
      <Wrapper>
        <Count>수량 : {Number}개</Count>
        <Price>총 가격 : {Total}원</Price>
        <ChangeButton onClick={()=>Button == "실시간 USD로 변환" ? changeButton("원화로 변경") + changeOpacity(1) : changeButton("실시간 USD로 변환") + changeOpacity(0)}>
        {Button}
        </ChangeButton>
        <Dollar watch={Opacity}>{rate.rates ? (Total / rate.rates.KRW).toFixed(2) : "0.00"}$</Dollar>
        {wordList.map(world => {
          return <Info>{world.name} {world.capital}</Info>
        })}
      </Wrapper>
    );
  }

export default inject(({counter})=>({
  Number: counter.number,
  Total : counter.total,
  InfoList : counter.infoList,
  GetInfo : counter.getInfo,
  Rate : counter.rate,
  GetCapital : counter.getCapital
}
))(observer(Calc))