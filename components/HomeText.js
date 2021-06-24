import React from 'react'
import SearchField from "react-search-field";
import styled from 'styled-components';

const HomeText = () => {
    return (
        <Container>
        
            <h1>Hi Listerians,</h1>
            <h1>Find and Touch with Listerians </h1>
            <h1>that perfectly fits your needs</h1>
        
        <SearchField1 />
    
        
        </Container>
    )
}

export default HomeText
const SearchField1=styled(SearchField)`
justify-content:space-between;


`
const Container=styled.div`
width:100%
justify-content:space-between;

padding: 1rem;
h1 {
    color:#939191;
    width:auto;
    font-family: Montserrat;
    margin:0px;
    font-size:3rem;
    &:nth-of-type(3) {
        margin:0px auto;
      }
}
`;
