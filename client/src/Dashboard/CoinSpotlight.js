import React from 'react'
import { Title } from '../Shared/Title';
import { AppContext } from '../App/AppProvider';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinImage from '../Shared/CoinImage';
import { SpotLightName } from './DashboardStyles';


export default () => {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
            <Title>
              <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
              <CoinImage spotlight coin= {coinList[currentFavorite]}/>
            </Title>}
        </AppContext.Consumer>
    )
}


