import React, {useState, useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import styled from "styled-components";
import {SmallSearchIcon} from "../../Components/Icons"; 

const HeaderWrapper = styled.div`
    color : #3d3d3d;
    font-weight : bold;
    font-size : 18px;
    text-align: center;
    padding: 0 27px  0 10px;
    margin: 30px 0 30px 0
    line-height: 1.7

`

const Month = styled.div`
    color : #ea0414;
    font-weight : bold;
    font-size : 18px;
    margin-bottom: 15px;
`
const MonthBorder = styled.div`
    background-color: #ebebeb
    border: 0
    height: 1px;
    width: 100%
`

const ListWrapper = styled.div``

const ScheduleWrapper = styled.div`
    margin: 30px 0
   
`
const Date = styled.div`
    color: #dd3333
    font-size : 18px;
    margin-bottom: 10px;
`
const Content = styled.a`
    color: #3d3d3d
    font-size : 18px;
    line-height: 1.7
    letter-spacing: 1.7
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

const Schedule = ({julyList, augustList, decemberList}) => {

    return (
        <>
        <Search>
            SEARCH IDOL
        </Search>
        <SearchFormWrapper>
            <SearchForm placeholder="Search.." />
                <SearchIconWrapper>
                    <SmallSearchIcon/>
                </SearchIconWrapper>
            </SearchFormWrapper>
        <HeaderWrapper>
            BLACKPINK UPCOMING SCHEDULE 2019
        </HeaderWrapper>
        <ListWrapper>
            <Month>
                July 2019
            </Month>
            <MonthBorder/>
            {julyList.map((schedule) => 
            <ScheduleWrapper>  
                <Date>
                    {schedule.date}:
                </Date>
                <Content>
                    {schedule.content}
                </Content>
            </ScheduleWrapper>
                )}
            <Month>
                August 2019
            </Month>
            <MonthBorder />
            {augustList.map((schedule) => 
            <ScheduleWrapper>  
                <Date>
                    {schedule.date}
                </Date>
                <Content>
                    {schedule.content}
                </Content>
            </ScheduleWrapper>
                )}
            <Month>
                December 2019
            </Month>
            <MonthBorder/>
            {decemberList.map((schedule) => 
            <ScheduleWrapper>  
                <Date>
                    {schedule.date}
                </Date>
                <Content>
                    {schedule.content}
                </Content>
            </ScheduleWrapper>
                )}
        </ListWrapper>
        </>
    )

}

export default inject(({store})=>({
    julyList: store.julyList,
    augustList: store.augustList,
    decemberList: store.decemberList
  }
  ))(observer(Schedule))