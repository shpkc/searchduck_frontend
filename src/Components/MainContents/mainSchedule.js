import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { Link } from "react-router-dom";
import {RightArrow} from "../Icons";


const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Title = styled.div`
    font-size: 2.25rem;
    &:after{
        background: #f24444;
        content: "";
        display: block;    
        margin: 1rem 0 1.875rem;
        width: 115px;
        height: 3px;
    }
`

const Upcoming = styled.div`
    background-color: #ea0414;
    color: #ffffff;
    text-align: center;
    font-size: 1.2rem;
    height: 70px;
    line-height: 70px;
    font-weight: bold;
    margin-bottom: 1.75rem;
`
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const List = styled.div`
    margin-bottom: 50px;
`

const Month = styled.div`
    display:inline-block;
    color: #ffffff;
    background-color: #ff6900;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    height: 44px;
    line-height: 42px;
    margin-bottom: 1.2em
    padding: 0 20px
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column
`
const Contents = styled.div`
    display: flex;
    margin-bottom: 1.2em
    background: #f2f2f2;
    padding: 18px 15px;
    
`

const Date = styled.div`
    font-size: 18px;
    margin-right: 10px;
    max-height: 20px;
    white-space:nowrap;
`

const Content = styled.div`
    font-size: 18px;
    color: #dd0311
`



const MainSchedule = ({julyList, augustList, decemberList}) => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return(
        <ScheduleWrapper>
            <Title>
                BLACKPINK SCHEDULE
            </Title>
            <Upcoming>
                BLACKPINK UPCOMING SCHEDULE 2019
            </Upcoming>
            <ListWrapper>
                <List>
                    <Month>
                        July 2019
                    </Month>
                    {julyList.map((content) => 
                    <ContentWrapper>
                        <Contents>
                            <Date>
                                {content.date} :
                            </Date>
                            <Content>
                                {content.content}
                            </Content>
                        </Contents>
                    </ContentWrapper>
                    )}
                </List>
                <List>
                    <Month>
                        August 2019
                    </Month>
                    {augustList.map((content) => 
                    <ContentWrapper>
                        <Contents>
                            <Date>
                                {content.date} :
                            </Date>
                            <Content>
                                {content.content}
                            </Content>
                        </Contents>
                    </ContentWrapper>
                    )}
                </List>
                <List>
                     <Month>
                         December 2019
                    </Month>
                    {decemberList.map((content) => 
                    <ContentWrapper>
                        <Contents>
                            <Date>
                                {content.date} :
                            </Date>
                            <Content>
                                {content.content}
                            </Content>
                        </Contents>
                    </ContentWrapper>
                    )}
                </List>
            </ListWrapper>
        </ScheduleWrapper>
    )
}


export default inject(({store})=>({
    julyList : store.julyList,
    augustList : store.augustList,
    decemberList : store.decemberList
  }
  ))(observer(MainSchedule))