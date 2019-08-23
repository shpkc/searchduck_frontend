import React, {useState, useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import styled from "styled-components";
import youtubeSearch from "youtube-api-search";

const YoutubeWrapper = styled.div`
    margin-bottom : 50px;
`



const Recently = styled.div`
    color : #3d3d3d;
    font-weight : bold;
    font-size : 18px;
    text-align: center;
    padding: 0 27px  0 10px;
    margin: 30px 0 30px 0
    line-height: 1.7
`

const Data = styled.div`
    margin-bottom : 30px;
    margin-right: 14px;
    img{
        width:267px;
    }
    text-align: center;
    &:hover{
        opacity: 0.7
        transition: opacity .2s ease-in-out;
        div:last-child{
            opacity:1
            transition: opacity .2s ease-in-out;
        }
    }
`

const Youtube = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0
    font-size: 20px;
    font-weight: bold;
`


export default () => {

    const API_KEY = "AIzaSyDW4oVVrgMIkEipjCG6u9NrGubQ3g9HUwM"

    const [list, setList] = useState([])
    useEffect(() => {
        youtubeSearch({key: API_KEY, term:"블랙핑크"}, (data) => {
            setList(data)
        })
    }, [])

    return (
        <YoutubeWrapper>
            <Recently>
            RECENTLY UPDATED YOUTUBE 
            </Recently>
            {list.length !== 0 && list.map((data) =>
                <Data>
                    <a href={"https://www.youtube.com/watch?v="+data.id.videoId} target="_blank">
                        <Youtube>
                        <img src={data.snippet.thumbnails.medium.url} alt=""/>
                        <Title>
                            {data.snippet.title.replace(/&#39;/gi, "'")}
                        </Title>
                        </Youtube>
                    </a>
                </Data>
            )}
        </YoutubeWrapper>
    )
}