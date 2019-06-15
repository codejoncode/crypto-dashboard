import React from 'react'
import {AppContext} from "../App/AppProvider";
import { StyledCoinGrid, CenterDiv } from './SettingsStyles';
import { TitleSelected } from '../Shared/Title';
import Coin from './Coin';

const getCoins = (coinList) => {
    return Object.keys(coinList).slice(0, 100);
}

const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <StyledCoinGrid>
                {getCoins(coinList).map((coinKey, index) => <Coin key ={index}  coinKey = {coinKey} />)}
            </StyledCoinGrid>}
            
        </AppContext.Consumer>
    )
}

export default CoinGrid
