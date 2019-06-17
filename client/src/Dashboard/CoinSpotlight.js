import React from "react";
import { Title } from "../Shared/Title";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { SpotLightName } from "./DashboardStyles";

export default () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) =>
          currentFavorite ? (
          <Title>
            <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
            <CoinImage spotlight coin={coinList[currentFavorite]} />
          </Title>
        ) : (
          <div />
        )
      }
    </AppContext.Consumer>
  );
};
