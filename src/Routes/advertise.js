import React, {useEffect} from "react";
import styled from "styled-components";

const AdvertiseWrapper = styled.div`
    min-height: 100vh;
`

export default () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
        <AdvertiseWrapper>
        </AdvertiseWrapper>
    )
}