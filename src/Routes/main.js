import React from "react";
import styled from "styled-components";
import Menu from "../Components/menu";
import Calc from "../Components/calc"

const HomeWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content : center;

`
const MainMenu = styled.div`
    width : 80%;
    background-color : rgb(152, 165, 179);
`

const MainCalc = styled.div`
    width : 20%;
    background-color : white;
`

export default () => {
    return(
        <>
        <HomeWrapper>
            <MainMenu>
                <Menu/>
            </MainMenu>
            <MainCalc>
                <Calc />
            </MainCalc>
        </HomeWrapper>
        </>
    )
}