import React from 'react'
import { AppContext } from '../App/AppProvider';
import { TitleSelected, Deleted, Disabled } from '../Shared/Title';
import  CoinHeader  from './CoinHeader';
import CoinImage from '../Shared/CoinImage';

const Coin = ({coinKey, topSection}) => {
    return (
        <AppContext.Consumer>
          {({coinList}) => {
              let coin = coinList[coinKey];
              let TitleClass = TitleSelected;
              if (topSection){
                TitleClass = Deleted; 
              }
              return <TitleClass> 
                  <CoinHeader topSection = {topSection} name= {coin.CoinName} symbol = {coin.Symbol}  />
                  <CoinImage coin = {coin}/>
              </TitleClass>
          }}
        </AppContext.Consumer>
    )
}

export default Coin
