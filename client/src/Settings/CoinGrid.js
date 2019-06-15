import React from 'react'
import {AppContext} from "../App/AppProvider";
import { StyledCoinGrid, CenterDiv } from './SettingsStyles';
import { TitleSelected } from '../Shared/Title';


const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <StyledCoinGrid>
                {Object.keys(coinList).map((coinKey, index) => <TitleSelected key ={index} >{coinKey}</TitleSelected>)}
            </StyledCoinGrid>}
            
        </AppContext.Consumer>
    )
}

export default CoinGrid
