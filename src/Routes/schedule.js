import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Schedule from "../Components/SubComponents/Schedule";
import { observer, inject } from 'mobx-react';
import MainSchedule from "../Components/MainContents/mainSchedule";

const MainWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center
    min-height: 100vh;
    margin-top: 60px;
`
const Main = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
`
const ContentsWrapper = styled.div`
    width: 70%
    padding-right:60px;
`

const SubWrapper = styled.div`
    width: 30%;
`


const MainPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return(
        <MainWrapper>
        <Main>
            <ContentsWrapper>
                <MainSchedule/>
            </ContentsWrapper>
            <SubWrapper>
                <Schedule/>
            </SubWrapper>        
        </Main>
        </MainWrapper>
    )
}


export default inject(({store})=>({
  }
  ))(observer(MainPage))