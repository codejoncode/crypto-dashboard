import React, { Component } from 'react'
import WelcomeMessage from './WelcomeMessage';
import ConfirmationButton from './ConfirmationButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Searching from './Searching';


class Settings extends Component {

    componentDidMount() {
        //this.props.getProfile() // passed in from main
        const username =  this.props.auth.getProfile().nickname;
        const email =  this.props.auth.getProfile().email;
        const picture =  this.props.auth.getProfile().picture;
        const name =  this.props.auth.getProfile().name;
        
        const body = {username, email, picture, name}
        
         localStorage.setItem("username", username);
         localStorage.setItem("email", email);
         localStorage.setItem("picture", picture);
         localStorage.setItem("name", name);
         const token = localStorage.getItem("access_token");
         this.props.registerOrLogin(body,token)

        
    }

    render() {
        return (
            <Page name ="settings">
                <WelcomeMessage name = "crypto"/>
                <CoinGrid topSection />
                <ConfirmationButton />
                <Searching />
                <CoinGrid />
            </Page>
        )

    }
}

export default Settings;
