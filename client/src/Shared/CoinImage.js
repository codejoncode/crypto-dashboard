import React from "react";
import { CoinImage } from "./SharedStyles";

export default ({ coin, spotlight }) => {
  return (
    <CoinImage
      spotlight = {spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

