import React, {Component} from 'react';
import styled from 'styled-components';
import { Button, Logo } from './NavStyles';


const Nav = styled.div`
  display: grid; 
  margin-bottom: 40px;
  grid-template-columns: 140px auto 100px 100px;
`;

class NavBar extends Component {
    render() {
        return (<Nav>
            
            <Logo>Crypto</Logo>
            {/* for auto  */}
            <div></div> 
            <Button active name = "dashboard" />
            <Button name = "settings" />
            <button>   
                <a href="https://crypto-dashboard.auth0.com/login?client=ZEvOn2qtAc5TyZmhttSQaqara1AzA4Ez">Login</a>
            </button>
        </Nav>)

    }
}

export default  NavBar; 