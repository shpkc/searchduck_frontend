import React from "react";
import styled from "styled-components";
import {SearchIcon} from "../Components/Icons";

const MainWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center
    min-height: 100vh;
    margin-top: 30px;
`
const Main = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
`
const IframeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    iframe{
        background: white;
        max-width: 450px; 
        border-radius: 3px; 
        border: 1px solid rgb(219, 219, 219); 
        box-shadow: none; 
        margin: 100px 0px 100px; 
        min-width: 326px; 
        padding: 0px;
        /* width: 100vw
        height: 110vh; */
    }
`

const ContentsWrapper = styled.div`
    width: 70%
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
export default () => {


    return(
        <MainWrapper>
        <Main>
            <ContentsWrapper>
                <IframeWrapper>
                <iframe src="https://www.instagram.com/p/B1BlTUDjrNJ/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
                <iframe src="https://www.instagram.com/p/B03mYvUAA-O/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
                <iframe src="https://www.instagram.com/p/B0nK8nNHN43/embed/captioned" height="930" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
                <iframe src="https://www.instagram.com/p/B0-IpJ6DZ2E/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
                <iframe src="https://www.instagram.com/p/B1MbzWcABhG/embed/captioned" height="850" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
                </IframeWrapper>
            </ContentsWrapper>
            <SubWrapper>
                <Search>
                    SEARCH IDOL
                </Search>
                <SearchFormWrapper>
                    <SearchForm placeholder="Search.." />
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </SearchFormWrapper>
            </SubWrapper>        
        </Main>
        </MainWrapper>
    )
}