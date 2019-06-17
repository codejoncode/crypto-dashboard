import React from "react";
import styled, { css } from "styled-components";
import { TitleSelected } from "../Shared/Title";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/SharedStyles";
import { Header } from "../Settings/CoinHeader";
import { JustifyRight, JustifyLeft } from "./DashboardStyles";
import { AppContext } from "../App/AppProvider";

const PriceTitleStyled = styled(TitleSelected)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3};
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
    `}
  ${props =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: ${props => (props.positive ? "green" : "red")};
`;

const numberFormat = number => {
  // the + will turn it back into a number.
  return +(number + "").slice(0, 7);
};

const ChangePercent = ({ data }) => {
  if (data) {
    return (
      <JustifyRight>
        <ChangePct positive={data.CHANGEPCT24HOUR >= 0}>
          {numberFormat(data.CHANGEPCT24HOUR)}%
        </ChangePct>
      </JustifyRight>
    );
  }
  return <div />;
};

const PriceTitleCompact = ({ sym, data, currentFavorite, setCurrentFavorite}) => {
  if (data) {
    return (
      <PriceTitleStyled onClick = {setCurrentFavorite} compact curentFavorite={currentFavorite}>
        <JustifyLeft> {sym} </JustifyLeft>
        <ChangePercent data={data} />

        <div>${numberFormat(data.PRICE)}</div>
      </PriceTitleStyled>
    );
  }
  return <div />;
};

const PriceTitle = ({ sym, data, currentFavorite, setCurrentFavorite }) => {
  if (data) {
    return (
      <PriceTitleStyled onClick = {setCurrentFavorite} currentFavorite={currentFavorite}>
        <Header>
          <div> {sym} </div>
          <ChangePercent data={data} />
        </Header>
        <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
      </PriceTitleStyled>
    );
  }
  return <div />;
};

export default ({ price, index }) => {
  let sym = null;
  let data = null;
  if (Object.keys(price).length) {
    sym = Object.keys(price)[0];
    data = price[sym]["USD"];
  }
  let TitleClass = index < 5 ? PriceTitle : PriceTitleCompact;

  if (data) {
    return (
      <AppContext.Consumer>
        {({ currentFavorite, setCurrentFavorite }) => (
          <TitleClass
            sym={sym}
            data={data}
            currentFavorite={currentFavorite === sym}
            setCurrentFavorite={() => setCurrentFavorite(sym)}
          />
        )}
      </AppContext.Consumer>
    );
  }

  return <div />;
};
