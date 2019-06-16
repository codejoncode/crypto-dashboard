import React from 'react'
import { AppContext } from '../App/AppProvider';
import { TitleSelected, Deleted, Disabled } from '../Shared/Title';
import  CoinHeader  from './CoinHeader';
import CoinImage from '../Shared/CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin ) => {
  return topSection ? () => {
      removeCoin(coinKey)
  } : () => {
      addCoin(coinKey)
  }
}

const Coin = ({coinKey, topSection}) => {
    return (
        <AppContext.Consumer>
          {({coinList, addCoin, removeCoin, isInFavorites}) => {
              let coin = coinList[coinKey];
              let TitleClass = TitleSelected;
              if (topSection){
                TitleClass = Deleted; 
              } else if (isInFavorites(coinKey)) {
                TitleClass = Disabled;
              }
              return <TitleClass
                onClick = {clickCoinHandler(topSection, coinKey, addCoin, removeCoin )}
              > 
                  <CoinHeader topSection = {topSection} name= {coin.CoinName} symbol = {coin.Symbol}  />
                  <CoinImage coin = {coin}/>
              </TitleClass>
          }}
        </AppContext.Consumer>
    )
}

export default Coin
