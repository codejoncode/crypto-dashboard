import React, { Component } from 'react'
import WelcomeMessage from './WelcomeMessage';
import ConfirmationButton from './ConfirmationButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Searching from './Searching';


class Settings extends Component {

    componentDidMount() {
        this.props.getProfile() // passed in from main
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
