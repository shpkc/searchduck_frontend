import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

const MainWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center
    min-height: 100vh;
    margin-top: 60px;
    margin-bottom: 200px;

`

const Main = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    flex-wrap: wrap;
    div:nth-child(3n){
        margin-right: 0
    }
    
`
const Product = styled.div`
display: flex;
flex-direction: column;
width: 30%;
margin-right: 55px;
img{
    width: 200px;
    vertical-align: middle
    &:hover{
        opacity: 0.7
        transition: opacity .2s ease-in-out;
    }
}

`
const Image = styled.div`
    margin-top: 30px
    height: 310px;
    line-height: 300px;
    text-align: center;
`

const Title = styled.div`
    display: inline-block    
    color:#000
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0
    margin-bottom: 15px;
    line-height: 1.3em;
    height: 70px;
    white-space: nowrap;
    overflow: hidden;
    white-space: normal
`
const Explain = styled.div`
    display: inline-block
    height: 80px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    white-space: normal
    color:#414141
    margin-bottom: 12px;
    
`

const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-between
`

const Price = styled.div`
    color: #fc0d1b
    line-height: 36px;
    font-weight: bold;
    font-size: 20px;
`

const Link = styled.div`
    width: 166px;
    height: 36px;
    color: #ffffff;
    background-color: #fd8a25
    text-align: center;
    line-height: 36px;
    font-weight: bold;
    font-size: 16px;
    &:hover{
        background-color: #43c801
        transition: all 0.4s
    }
`


const Merch = () => {
    return(
        <MainWrapper>
        <Main>
        <Product>
            <Image>
            <a href="https://amzn.to/2KPnJBx" target="_blank">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51qs8CDeh%2BL._UX679_.jpg"/>
            </a>
            </Image>
            
            <Title>
            YG Entertainment Idol Goods Fan Products Select Official Blackpink 2018 Tour [in Your Area] Seoul DVD
            </Title>
        
            <Explain>
            Official YG Entertainment Goods and Merchandise from YG Select
            Lightstick Size: 3.5in X 10in X 6.1in (9cm X 25.5cm X 15.5cm), 5.2oz (148g) / Packaging Size: 6.8in X 11.2in X 3.6in (17.5cm X 28.5cm X 9.3cm), 10.9oz (310g)
            Battery: DC 3V. AAA 2EA required(*not included with this product*)
            Battery Usage Time: 5 to 10 hours. The battery usage time depends on the features of the light stick used
            </Explain>
            <PriceWrapper>
                <Price>
                    $69.96
                </Price>
                <a href="https://amzn.to/2KPnJBx" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
            <Image>
            <a href="https://amzn.to/2ZqNfFi"target="_blank"> 
            <img src="https://images-na.ssl-images-amazon.com/images/I/81QX375EqUL._UX679_.jpg"/>
            </a>
            </Image>
            
            <Title>
            YG Blackpink - Blackpink PHOTOBOOK Limited Edition 184p Photobook+4Postcards+On Pack Poster+Double Side Extra Photocards Set
            </Title>
            
            <Explain>    
            Ships from Korea, Republic of
            100% Original & Brand New Item
            Will be Count Towards Hanteo and Gaon Chart
            Free Gift : Double-Side Extra Photocards Set (KPOP MARKET Store Gift)
            </Explain>
            <PriceWrapper>
                <Price>
                    $52.00
                </Price>
                <a href="https://amzn.to/2ZqNfFi" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product> 
        <Product>
        <Image>
        <a href="https://amzn.to/2NqebyQ" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81eRAr6KYxL._UX679_.jpg"/>
        </a>
        </Image>
        
            <Title>
            YG Blackpink - Kill This Love [Pink ver.] (2nd Mini Album) CD+52p Photobook+Lyrics Book+4Photocards+Polaroid Photocard+Sticker Set+On Pack Poster+Folded Poster+Double Side Extra Photocards Set
            </Title>
        
            <Explain>    
            Ships from Korea, Republic of
            100% Original & Brand New Item
            Will be Count Towards Hanteo and Gaon Chart
            Free Gift : Double Side Extra photocards Set (KPOP MARKET Store Gift)
            </Explain>
            <PriceWrapper>
                <Price>
                $23.99 
                </Price>
                <a href="https://amzn.to/2ZqNfFi" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
            <Image>
        <a href="https://amzn.to/3203FSG" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/512ARN5otoL._UX679_.jpg"/>
        </a>
        </Image>
        
            <Title>
            YG Entertainment Idol Goods Fan Products Select Blackpink Official LIGHTSTICK (LightStick)
            </Title>
        
            <Explain>    
            Official YG Entertainment Goods and Merchandise from YG Select
            Lightstick Size: 3.5in X 10in X 6.1in (9cm X 25.5cm X 15.5cm), 5.2oz (148g) / Packaging Size: 6.8in X 11.2in X 3.6in (17.5cm X 28.5cm X 9.3cm), 10.9oz (310g)
            Battery: DC 3V. AAA 2EA required(*not included with this product*)
            Battery Usage Time: 5 to 10 hours. The battery usage time depends on the features of the light stick used

            </Explain>
            <PriceWrapper>
                <Price>
                    $20.99
                </Price>
                <a href="https://amzn.to/2ZqNfFi" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
        <Image>
        <a href="https://amzn.to/2NBoCjh" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51YD3Vx-SjL._UX679_.jpg"/>
        </a>
        </Image>
        
            <Title>
            [Official] YG Entertainment YG Select Blackpink World Tour Tour Scratch MAP
            </Title>
           
            <Explain>    
            Official YG Entertainment Goods and Merchandise from YG Select.
            Enjoy Blackpink’s new album and upcoming concert with new world tour official goods!
            Pre-Order from April 5th 2019 to April 17th 2019. Release Date on April 18th 2019.
            TRACK BLACKPINK’S WORLD TOURS around the globe by scratching off the map's to reveal a full image of Blackpink
            SIZE: Poster – 24.40 x 16.53 mm, Weight: 7.76oz / Made with Papers, Pen, Brush

            </Explain>
            <PriceWrapper>
                <Price>
                $41.99
                </Price>
                <a href="https://amzn.to/2NBoCjh" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
        <Image>
        <a href="https://amzn.to/2zib3wE" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71pvaIr0-9L._UX679_.jpg"/>
        </a>
        </Image>
       
            <Title>
            YG Entertainment Official merchandise YG Select BLACKPINK WORLD TOUR BANDANA
            </Title>
            
            <Explain>    
            Official YG Entertainment Goods and Merchandise from YG Select.
            Enjoy Blackpink’s new album and upcoming concert with new world tour official goods!
            Pre-Order from April 5th 2019 to April 17th 2019. Release Date on April 18th 2019.
            Perfect BANDANA for Blackpink’s Concert!
            Color: Multi, Mono / Size: 23.62 x 23.62in, 0.70oz / Made with 100% Cotton
            </Explain>
            <PriceWrapper>
                <Price>
                $26.99
                </Price>
                <a href="https://amzn.to/2zib3wE" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
            <Image>
        <a href="https://amzn.to/2Hnlu6r" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51nnJNslNzL._UX679_.jpg"/>
        </a>
        </Image>
        
            <Title>
            YG Select Official Merchandise Entertainment - Blackpink Light Stick & in Your Area Towel Set
            </Title>
            
            <Explain>    
            Official YG Entertainment Goods and Merchandise from YG Select.
            Enjoy BlackPink's upcoming concert with Blackpink Lightstick and in Your Area Towel Set!
            Lightstick Size: 3.5in X 10in X 6.1in (9cm X 25.5cm X 15.5cm), 5.2oz (148g) / Packaging Size: 6.8in X 11.2in X 3.6in (17.5cm X 28.5cm X 9.3cm), 10.9oz (310g)
            Battery Usage Time: 5 to 10 hours. The battery usage time depends on the features of the light stick used
            Towel Size: 11.81 x 43.30cm, 0.33lb / Made with 100% cotton
            </Explain>
            <PriceWrapper>
                <Price>
                    $59.99
                </Price>
                <a href="https://amzn.to/2Hnlu6r" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        <Product>
        <Image>
        <a href="https://amzn.to/2Ns4xvE" target="_blank">
        <img src="https://images-na.ssl-images-amazon.com/images/I/610uvq3MxeL._UX679_.jpg"/>
        </a>
        </Image>
        
        <Title>
        BLACKPINK - [Square Up] 1st Mini Album Pink Ver CD+Booklet+PhotoCard+SelfieCard+Lennticular Lyrics+PostCard K-POP Sealed
        </Title>
        
            <Explain>    
            Officially distributed Brand New & Orginal item from Manufacturer
            All items and features from original manufacturers are delivered in original sealed package condition
            Your purchase quantity will be count on Korea HANTEO & GAON Chart!
            </Explain>
            <PriceWrapper>
                <Price>
                    $22.23
                </Price>
                <a href="https://amzn.to/2Ns4xvE" target="_blank">
                <Link>
                BUY ON AMAZON
                </Link>
                </a>
            </PriceWrapper>
        </Product>
        </Main>
        </MainWrapper>
    )
}


export default inject(({store})=>({
}
))(observer(Merch))