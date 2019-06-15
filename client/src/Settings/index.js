import React from 'react'
import WelcomeMessage from './WelcomeMessage';
import ConfirmationButton from './ConfirmationButton';

const Settings = () => {
    return (
        <div>
            <WelcomeMessage name = "crypto"/>
            <ConfirmationButton />
        </div>
    )
}

export default Settings;
