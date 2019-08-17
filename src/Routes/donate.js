import React, {useEffect} from "react";
import styled from "styled-components";

const DonateWrapper = styled.div`
    min-height: 100vh;
`

export default () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
        <DonateWrapper>
        </DonateWrapper>
    )
}