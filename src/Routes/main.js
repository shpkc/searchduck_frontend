import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const MainWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center
    min-height: 100vh;
`
const Main = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
`
const IframeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    iframe{
        background: white;
        max-width: 450px; 
        width: 450px;
        border-radius: 3px; 
        border: 1px solid rgb(219, 219, 219); 
        box-shadow: none; 
        margin: 100px 0px 100px; 
        min-width: 326px; 
        padding: 0px;
    }
`

export default () => {


    return(
        <MainWrapper>
        <Main>
        <IframeWrapper>
        <iframe src="https://www.instagram.com/p/B03mYvUAA-O/embed/" allowtransparency="true" allowfullscreen="true" frameborder="0" height="765" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B1BlTUDjrNJ/embed/" allowtransparency="true" allowfullscreen="true" frameborder="0" height="765" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B0nK8nNHN43/embed/" allowtransparency="true" allowfullscreen="true" frameborder="0" height="765" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        </IframeWrapper>        
        </Main>
        </MainWrapper>
    )
}