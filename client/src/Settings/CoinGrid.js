import React from 'react'
import {AppContext} from "../App/AppProvider";
import { StyledCoinGrid, CenterDiv } from './SettingsStyles';
import { TitleSelected } from '../Shared/Title';
import Coin from './Coin';

const getCoins = (coinList, topSection) => {
    return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

const CoinGrid = ({topSection}) => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <StyledCoinGrid>
                {getCoins(coinList, topSection).map((coinKey, index) => <Coin topSection = {topSection} key ={index}  coinKey = {coinKey} />)}
            </StyledCoinGrid>}
            
        </AppContext.Consumer>
    )
}

export default CoinGrid
