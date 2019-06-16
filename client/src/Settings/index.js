import React from 'react'
import WelcomeMessage from './WelcomeMessage';
import ConfirmationButton from './ConfirmationButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';


const Settings = () => {
    return (
        <Page name ="settings">
            <WelcomeMessage name = "crypto"/>
            <CoinGrid topSection />
            <ConfirmationButton />
            <CoinGrid />
        </Page>
    )
}

export default Settings;
