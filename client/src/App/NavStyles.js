import React from 'react';
import styled, { css } from 'styled-components';
export const Logo = styled.div`
  font-size: 1.5em;
`;

export const ButtonElement = styled.div`
  cursor: pointer;
  ${props => props.active && css`

    text-shadow: 0px 0px 60px #03ff03
  `}
`;

export const capitializeString = (str) => {
    let returning = ""; 
    for(let i = 0; i< str.length; i++){
        i === 0 ? returning += str[i].toUpperCase() : returning += str[i];
    }
    return returning; 
}


// extract the name from props. 
export const Button = ({name, active}) => {
  return  (<ButtonElement active = {active}>
      {capitializeString(name)}
  </ButtonElement>)
}