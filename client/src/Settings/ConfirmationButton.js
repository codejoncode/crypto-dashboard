import React from 'react'; 
import { AppContext } from '../App/AppProvider';
import { ButtonConfirm, CenterDiv } from './SettingsStyles';


export default () => {
    return (
        <AppContext.Consumer>
            {/* Grabbing confirmFavorites from App provider state */}
            {({confirmFavorites}) => 
            <CenterDiv>
              <ButtonConfirm onClick = {confirmFavorites}>Confirm Favorites</ButtonConfirm>
            </CenterDiv>
            }
        </AppContext.Consumer>
    )
}
