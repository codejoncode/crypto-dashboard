import React from 'react';
import styled from "styled-components";
import { Deleted } from "../Shared/Title";

export const Header = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr; 

`;

export const Symbol = styled.div`
  justify-self: right; 
`;

export const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${Deleted} : hover & {
    display: block; 
    color: red; 
}
`;




const CoinHeader = ({name, symbol, topSection}) => {
    return (
        <Header >
            <div>{name}</div>
            {topSection ? (
                <DeleteIcon> X </DeleteIcon>)
                :
                // <Symbol>{symbol}</Symbol>
                <Symbol>{topSection ? 'X' : symbol}</Symbol>

            }
            
        </Header>
    )
}

export default CoinHeader; 