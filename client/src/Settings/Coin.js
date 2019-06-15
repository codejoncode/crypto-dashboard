import React from 'react'
import { AppContext } from '../App/AppProvider';
import { TitleSelected } from '../Shared/Title';
import  CoinHeader  from './CoinHeader';
import CoinImage from '../Shared/CoinImage';

const Coin = ({coinKey}) => {
    return (
        <AppContext.Consumer>
          {({coinList}) => {
              let coin = coinList[coinKey];
              const TitleClass = TitleSelected;
              return <TitleClass> 
                  <CoinHeader name= {coin.CoinName} symbol = {coin.Symbol}  />
                  <CoinImage coin = {coin}/>
              </TitleClass>
          }}
        </AppContext.Consumer>
    )
}

export default Coin
