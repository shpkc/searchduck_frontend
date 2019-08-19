import React from "react";
import styled from "styled-components";
import {SmallSearchIcon} from "../Components/Icons";
import Schedule from "../Components/SubComponents/Schedule";
import { observer, inject } from 'mobx-react';
import MainContents from "../Components/MainContents/mainContents";

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
const Search = styled.div`
    color: #020202
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.125rem;
    padding: 0
    text-transform: uppercase;
    &:after{
        background: #f24444;
        content: "";
        display: block;    
        margin: 0.9375rem 0 1.875rem;
        width: 115px;
        height: 3px;
    }
`
const SearchFormWrapper = styled.form`
    width: 320px;
    height: 50px;
    border: 1px solid #eee;
    display: flex;
`
const SearchForm = styled.input`
    width: 81.25%
    height: 100%;
    border: 1px solid #eee;
    padding: 0 1.25rem;
    text-align: left;
    font-size: 16px;
    letter-spacing: 1px;
`
const SearchIconWrapper = styled.div`
    width: 18.75%
    background-color: #df0312;
    fill: white;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color : #d93d3d
        transition : all 0.6s
        cursor: pointer;
    }
`



const MainPage = () => {

    return(
        <MainWrapper>
        <Main>
            <ContentsWrapper>
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