import React from "react";
import { AppContext } from "../App/AppProvider";
import { StyledCoinGrid,  } from "./SettingsStyles";
import Coin from "./Coin";

const getFilteredCoins = (coinList, filteredCoins) => {
    /*Returns filtered coins if they exist or it returns the first 100 keys of the coinList */
  return (filteredCoins && Object.keys(filteredCoins)) || 
    Object.keys(coinList).slice(0, 100)
}

const getCoins = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getFilteredCoins(coinList, filteredCoins);
};

const CoinGrid = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <StyledCoinGrid>
          {getCoins(coinList, topSection, favorites, filteredCoins).map((coinKey) => (
            <Coin topSection={topSection} key={coinKey} coinKey={coinKey} />
          ))}
        </StyledCoinGrid>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
