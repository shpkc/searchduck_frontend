import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Schedule from "../Components/SubComponents/Schedule";
import { observer, inject } from 'mobx-react';
import {toJS} from "mobx"
import BlackpinkReddit from "../Components/MainContents/reddit/blackpinkReddit";

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
    margin-bottom: 200px;
`


const MainPage = ({infoList, getApi}) => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    // title, 썸네일, author, url("https://www.reddit.com/r" + permalink)
    // api : blackpink, jisoo, jennie, rose

    return(
        <MainWrapper>
        <Main>
            <ContentsWrapper>
            <BlackpinkReddit/>
            </ContentsWrapper>
            <SubWrapper>
                <Schedule/>
            </SubWrapper>        
        </Main>
        </MainWrapper>
    )
}


export default inject(({store})=>({
    infoList: store.infoList,
    getApi: store.getApi
  }
  ))(observer(MainPage))