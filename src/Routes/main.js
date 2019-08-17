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

export default () => {


    return(
        <MainWrapper>
        <Main>
        <IframeWrapper>
        <iframe src="https://www.instagram.com/p/B1BlTUDjrNJ/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B03mYvUAA-O/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B0nK8nNHN43/embed/captioned" height="930" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B0-IpJ6DZ2E/embed/captioned" height="770" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        <iframe src="https://www.instagram.com/p/B1MbzWcABhG/embed/captioned" height="850" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" />
        
        
        </IframeWrapper>        
        </Main>
        </MainWrapper>
    )
}