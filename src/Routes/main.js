import React from "react";
import styled from "styled-components";
import {SmallSearchIcon} from "../Components/Icons";
import Schedule from "../Components/SubComponents/Schedule";

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
export default () => {

    return(
        <MainWrapper>
        <Main>
            <ContentsWrapper>
                <IframeWrapper>
                    <Frame>
                    <iframe src="https://www.instagram.com/p/B1BlTUDjrNJ/embed/" height="630"/>
                    <FrameContents>
                    <Sort>
                            BLACKPINK INSTAGRAM
                            
                        </Sort>
                        <Title>
                            BLACKPINK LISA Instagram and Insta Story Update, August 11, 2019
                        </Title>
                        <Date>
                            AUGUST 11, 2019(KST)
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                        </FrameContents>
                    </Frame>
                    <Frame>
                    <iframe src="https://www.instagram.com/p/B0-IpJ6DZ2E/embed/" height="550"/>
                    <FrameContents>
                        <Sort>
                            BLACKPINK INSTAGRAM
                        </Sort>
                        <Title>
                            BLACKPINK LISA Instagram and Insta Story Update, August 10, 2019
                        </Title>
                        <Date>
                            AUGUST 10, 2019(KST)
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                    </FrameContents>
                    
                    </Frame>
                    <Frame>
                    <iframe src="https://www.instagram.com/p/B03mYvUAA-O/embed/" height="570"/>
                    <FrameContents>
                    <Sort>
                            BLACKPINK INSTAGRAM
                            
                        </Sort>
                        <Title>
                            Tommy Brown With BLACKPINK, August 8, 2019
                        </Title>
                        <Date>
                            AUGUST 8, 2019(KST)
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                        </FrameContents>
                    </Frame>
                    <Frame>
                    <iframe src="https://www.instagram.com/p/B0nK8nNHN43/embed" height="570"/>
                    <FrameContents>
                    <Sort>
                            BLACKPINK INSTAGRAM
                            
                        </Sort>
                        <Title>
                            BLACKPINK OFFICIAL Instagram and Insta Story Update, August 1, 2019
                        </Title>
                        <Date>
                            AUGUST 1, 2019(KST)
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                        </FrameContents>
                       
                    </Frame>
                    <Frame>
                    <iframe src="https://www.instagram.com/p/B1MbzWcABhG/embed/" height="620"/>
                    <FrameContents>
                    <Sort>
                            BLACKPINK INSTAGRAM
                            
                        </Sort>
                        <Title>
                        Producer Tommy Brown Shared New Photos with BLACKPINK and Ariana Grande
                        </Title>
                        <Date>
                            AUGUST 16, 2019(KST)
                        </Date>
                        <RedBar/>
                        <ReadMore>
                            READ MORE
                        </ReadMore>
                        </FrameContents>
                    </Frame>
                </IframeWrapper>
            </ContentsWrapper>
            <SubWrapper>
                <Search>
                    SEARCH IDOL
                </Search>
                <SearchFormWrapper>
                    <SearchForm placeholder="Search.." />
                    <SearchIconWrapper>
                        <SmallSearchIcon/>
                    </SearchIconWrapper>
                </SearchFormWrapper>
                <Schedule/>
            </SubWrapper>        
        </Main>
        </MainWrapper>
    )
}