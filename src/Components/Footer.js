import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {TwitIcon, YoutubeIcon, FacebookIcon} from "./Icons"

const Footer = styled.div`
    background-color : black
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
    flex-direction: column;
    
`

const FooterWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: space-between;
`

const FooterLink = styled.div`
    color: #fff
    font-size: 1rem;
    line-height: 2;
    margin : 20px;
    &:hover{
        color: rgb(170, 170, 170)
    }
`

const LinkWrapper = styled.div`
    display: flex;
`

const IconWrapper = styled.div`
    display: flex;
    margin: 20px 0 40px  0;
`
const TwitterWrapper = styled.div`
    background-color: #242424;
    fill:white
    border-left: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    margin: 0 0.0625rem 0.0625rem 0;
    &:hover {
        background-color : red
        transition : all 0.6s
    }
`

const YoutubeWrapper = styled.div`
    background-color: #242424;
    fill:white
    border-left: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    margin: 0 0.0625rem 0.0625rem 0;
    &:hover {
        background-color : red
        transition : all 0.6s
    }
`

const FacebookWrapper = styled.div`
    background-color: #242424;    
    fill:white
    border-left: 1px solid #262626;
    border-right: 1px solid #262626;
    height: 45px;
    line-height: 55px;
    width: 45px;
    text-align: center
    margin: 0 0.0625rem 0.0625rem 0;
    &:hover {
        background-color : red
        transition : all 0.6s
}
`

const Copyright = styled.div`
    color: #fff
    font-size: 1rem;
    line-height: 2;
    margin : 20px;
    `

export default () => {
    return(
        <Footer>
            <FooterWrapper>
            <LinkWrapper>
                <Link to={"/about"}>
                    <FooterLink>ABOUT</FooterLink>
                </Link>
                <Link to={"/contact"}>
                    <FooterLink>CONTACT</FooterLink>
                </Link>
                <Link to={"/policy"}>
                    <FooterLink>POLICY</FooterLink>
                </Link>
                <Link to={"/donate"}>
                    <FooterLink>DONATE</FooterLink>
                </Link>
                <Link to={"/advertise"}>
                    <FooterLink>ADVERTISE</FooterLink>
                </Link>
            </LinkWrapper>
            <Copyright>COPYRIGHT &copy; {new Date().getFullYear()} SEARCH DOL  </Copyright>
            </FooterWrapper>
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
        </Footer>
    )
}