import React, {useState} from "react";
import styled from "styled-components";
import { decorate, observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import sin from "../Images/sin.jpg"
import jin from "../Images/jin.jpg"
import ansung from "../Images/ansung.jpg"
import japa from "../Images/japa.jpg"
import nuguri from "../Images/nuguri.jpg"
import ojing from "../Images/ojing.jpg"
import paldo from "../Images/paldo.jpg"
import saeu from "../Images/saeu.jpg"
import wang from "../Images/wang.jpg"
import samyang from "../Images/samyang.jpg"

const Wrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
   
`
const Menu = styled.div` 
    width: 300px;
    height: 300px;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.blueColor};
    margin : 50px;
    color: #012b6a;
    font-weight: 600;
    font-size : 40px;
    img { 
        width : 200px;
        height : 200px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    margin-bottom : 10px;
`
const PriceWrapper = styled.div`
    display:flex;

`
const Price = styled.div`
    margin-top : 10px;
    margin-right : 30px;
    font-size : 30px;
    color:black;
`
const AddButton = styled.button``

const Test = ({inCrease}) =>  {
    const objList = [
        {title: "안성탕면", price: 12000, img:ansung},
        {title: "짜파게티", price:18200, img:japa},
        {title: "진라면", price:17960, img:jin},
        {title:"너구리",price:16080, img:nuguri},
        {title:"오징어짬뽕",price:18900, img:ojing},
        {title:"팔도비빔면",price:14810, img:paldo},
        {title:"새우탕",price:19900, img:saeu},   
        {title:"삼양라면",price:20300, img:samyang},
        {title:"신라면",price:14160, img:sin},
        {title:"왕뚜껑",price:13910, img:wang}
    ]


    return(
        <>
        <Wrapper>
        {objList.map((menu, index) => (
            <Menu>
            <Title>{menu.title}</Title>
            <img src={menu.img} alt="" />
            <PriceWrapper>
                <Price>
                    {menu.price} 원
                </Price>
                <AddButton onClick={()=>inCrease(menu.price)}>
                    추가
                </AddButton>
            </PriceWrapper>
            </Menu>
        ))}
        </Wrapper>
        </>
    )
    
}

export default inject(({counter})=>({
    inCrease: counter.increase
}
))(observer(Test))