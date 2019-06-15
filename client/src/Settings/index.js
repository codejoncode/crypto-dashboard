import React from 'react'
import WelcomeMessage from './WelcomeMessage';
import ConfirmationButton from './ConfirmationButton';
import Page from '../Shared/Page';

const Settings = () => {
    return (
        <Page name ="settings">
            <WelcomeMessage name = "crypto"/>
            <ConfirmationButton />
        </Page>
    )
}

export default Settings;
