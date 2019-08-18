import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {TwitIcon, YoutubeIcon, FacebookIcon, SearchIcon} from "./Icons"

const Header = styled.div`
    background-color : black
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
`

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: space-between;

`

const IconWrapper = styled.div`
    display: flex
`

const TwitterWrapper = styled.div`
    fill:white
    border-left: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    &:hover {
        background-color : red
        transition : all 0.6s
    }
`

const YoutubeWrapper = styled.div`
    fill:white
    border-left: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    &:hover {
        background-color : red
        transition : all 0.6s
    }
`

const FacebookWrapper = styled.div`
    fill:white
    border-left: 1px solid #262626;
    border-right: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    &:hover {
        background-color : red
        transition : all 0.6s
}
`

const SearchWrapper = styled.div`
    background-color: red;
    fill:white
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    &:hover {
        background-color : black;
        transition : all 0.6s;
        cursor: pointer;
}
`
const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    height:200px;
    border-bottom: 1px solid #eee
`
const Title = styled.div`
    color: #020202
    font-size: 4.5rem;
    font-weight: 700
    text-transform: uppercase;
    font-family: "Source Sans Pro", sans-serif;
    line-height: 1.3;
`
const SemiTitle = styled.div`
    color: #666;
    font-size: 0.875rem;
    font-family: "Open Sans", sans-serif;
    line-height: 1.6
`

const MenuWrapper = styled.div`
    height: 60px;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center,
`
const Menus = styled.div`
    
    /* width: 100%;
    max-width: ${props => props.theme.maxWidth}; */
    display: flex;
    ${props => props.height > 280 && 
        `background-color: #fff
         position : fixed
         border-bottom: 1px solid #eee
         opacity: 0.9;
         top: 0;
         z-index: 99950;
         width: 100%;
         max-width: ${props => props.theme.maxWidth};
         justify-content: center;
         align-items: center,
         `
        
    }
    
`

const Menu = styled.div`
    position:relative;
    color: #3d3d3d;
    font-size: 0.875rem
    padding: 1.0625rem 1.5rem;
    font-weight: 600;
    transition: all 0.25s ease-out
    zoom: 1;
    text-decoration: none;
    &:hover {
        color:#dd0311
    }
    &:before {
        content: "";
        position: absolute;
        width: ${props => props.width}
        height: 2px;
        bottom: 0;
        background-color: #dd0311;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.5s 
        margin-bottom: 10px;
    }
    &:hover:before{
        visibility: visible;
        transform: scaleX(1)
    }
    

`


export default () => {
    const [yHeight, yChange] = useState(0)
    useEffect(()=>{
        window.onscroll = () => {
            yChange(window.pageYOffset)
        }
    },[yHeight])

    return (
        <>
    <Header>
        <HeaderWrapper>
        <IconWrapper>
            <TwitterWrapper>
                <TwitIcon />
            </TwitterWrapper>
            <YoutubeWrapper>
                <YoutubeIcon/>
            </YoutubeWrapper>
            <FacebookWrapper>
                <FacebookIcon/>
            </FacebookWrapper>
        </IconWrapper>
        <SearchWrapper>
        <SearchIcon/>
        </SearchWrapper>
        </HeaderWrapper>
    </Header>
    <TitleWrapper>
        <Link to={""}>
        <Title>
            SEARCH DOL
        </Title>
        </Link>
        <Link to={""}>
        <SemiTitle>
            DAILY UPDATE YOUR IDOL
        </SemiTitle>
        </Link>
    </TitleWrapper>
    <MenuWrapper >
        <Menus height={yHeight}>
            <Menu width={"67%"}>NEWS UPDATE</Menu>
            <Menu width={"59%"}>SCHEDULE</Menu>
            <Menu width={"48%"}>MUSIC</Menu>
            <Menu width={"73%"}>BLACKPINK MERCH</Menu>
            <Menu width={"68%"}>PERFORMANCE</Menu>
            <Menu width={"57%"}>RANKING</Menu>
        </Menus>
    </MenuWrapper>
    </>
    )
}