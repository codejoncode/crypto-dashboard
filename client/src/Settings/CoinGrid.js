import React from "react";
import { AppContext } from "../App/AppProvider";
import { StyledCoinGrid,  } from "./SettingsStyles";
import Coin from "./Coin";

const getCoins = (coinList, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

const CoinGrid = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <StyledCoinGrid>
          {getCoins(coinList, topSection, favorites).map((coinKey, index) => (
            <Coin topSection={topSection} key={index} coinKey={coinKey} />
          ))}
        </StyledCoinGrid>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
