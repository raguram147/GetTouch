import React from 'react'
import styled from 'styled-components';
import HomeText from './HomeText.js'
const Home = () => {
    return (
      <Container>
          <InnerWrapper>
            <Left>
              <HomeText></HomeText>
            </Left>
            <RightContent>
                    <OuterCircle><InnerCircle></InnerCircle></OuterCircle>
            </RightContent>
          </InnerWrapper>
      </Container>  
    );
}

export default Home
const InnerWrapper = styled.div`
    max-width:1000px
    height:100%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

`;
const Container=styled.div`
background-color:#E5E5E5;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Left=styled.div`
    width:90%;
    @meida(max-width:670px){
        width:80%
    }
`;
const RightContent=styled.div`
    
    width:10%;
    animation: zoomInZoomOut 5s infinite;
    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      }
      
      @keyframes zoomInZoomOut {
        0% {
          transform: scale(1, 1);
        }
        50% {
          transform: scale(1.2, 1.2);
        }
        100% {
          transform: scale(1, 1);
        }
      }
      @media(max-width:670px){
          display:none;
      }
`;
const OuterCircle=styled.div`
    
    width: 200px;
    height: 200px;
    border: 2px dashed #EF6E25;
    background-color: ;
    border-radius:50%;
    animation: spin 5s;
    animation-duration: 5s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;`;
const InnerCircle=styled.div`
    position:absolute;
    margin:50px 0px 0px 50px;
    width: 100px;
    height: 100px;
    border: 1.5px solid #EF6E25;
    background-color: ;
    border-radius:50%;
    animation: spin 5s;
    animation-duration: 5s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
`;

