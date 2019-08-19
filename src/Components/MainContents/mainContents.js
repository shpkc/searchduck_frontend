import React from "react";
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

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
        margin-bottom: 100px  
        min-width: 326px; 
        padding: 0px;
        /* width: 100vw
        height: 110vh; */
    }
`

const Frame = styled.div`
    display: flex;
    iframe{
        border: 1px solid rgb(219, 219, 219);
    }
    border-bottom: 1px solid #eee;
    margin-bottom:50px;
`
const FrameContents = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;

`

const Sort = styled.div`
    color: #dd0311;
    font-weight: 600;
    margin-bottom : 15px;
`

const Title = styled.div`
    color: #020202
    font-size: 2em
    line-height: 1.3
    &:hover{
        color: #dd0311
    }
`
const RedBar = styled.div`
    background: #f24444;
    content: "";
    display: block;
    margin: 0.9375rem 0 1.875rem;
    width: 150px;
    height: 3px;
    

`
const Date = styled.div`
    margin: 18px 0 23px 0;
    color: #999
`

const ReadMore = styled.div`
    background: #f24444;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    width: 114px;
    height: 44px;
    padding: 0.9rem 1.25rem;
    &:hover{
        background-color: #d93d3d;
        transition: all 0.6s;
        cursor: pointer;
    }
`

const MainContents = ({contentList}) => {
    return(
        <IframeWrapper>
                    {contentList.map((content) => 
                    <Frame>
                    <iframe src={content.mainUrl} height="630"/>
                    <FrameContents>
                        <Sort>
                            {content.sort}
                        </Sort>
                        <Title>
                            {content.title}
                        </Title>
                        <Date>
                            {content.date}
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                        </FrameContents>
                    </Frame>
                    )}
        </IframeWrapper>
    )
}


export default inject(({store})=>({
    contentList : store.contentList
  }
  ))(observer(MainContents))