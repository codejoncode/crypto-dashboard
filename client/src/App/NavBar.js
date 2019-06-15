import React from 'react';
import styled from 'styled-components';
import { Button, Logo } from './NavStyles';


const Nav = styled.div`
  display: grid; 
  grid-template-columns: 180px auto 100px 100px; 
`;

export default () => {
    return (<Nav>
        
        <Logo>Crypto</Logo>
        {/* for auto  */}
        <div></div> 
        <Button active name = "dashboard" />
        <Button name = "settings" />
    </Nav>)
}