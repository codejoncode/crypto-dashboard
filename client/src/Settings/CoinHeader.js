import React from 'react';
import styled from "styled-components";

export const Header = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr; 

`;

export const Symbol = styled.div`
  justify-self: right; 
`;

const CoinHeader = ({name, symbol}) => {
    return (
        <Header>
            <div>{name}</div>
            <Symbol>{symbol}</Symbol>
        </Header>
    )
}

export default CoinHeader; 