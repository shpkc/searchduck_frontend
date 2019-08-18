import React, {useState, useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import styled from "styled-components";

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
    margin-bottom: 7px;
`
const MonthBorder = styled.div`
    background-color: #ebebeb
    border: 0
    height: 1px;
    width: 100%
`

const ListWrapper = styled.div``

const ScheduleWrapper = styled.div`
    margin: 35px 0
   
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

const Schedule = ({julyList, augustList, decemberList}) => {

    return (
        <>
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
                    {schedule.date}:
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
                    {schedule.date}:
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