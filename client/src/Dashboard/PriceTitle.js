import React from "react";
import styled, { css } from "styled-components";
import { TitleSelected } from "../Shared/Title";
import { fontSize3, fontSizeBig } from "../Shared/SharedStyles";
import { Header } from "../Settings/CoinHeader";
import { JustifyRight, JustifyLeft } from "./DashboardStyles";

const PriceTitleStyled = styled(TitleSelected)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3};
      grid-template-columns: repeat(3, 1fr);
      grid-gap : 5px;
      justify-items: right;
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

const PriceTitleCompact = ({sym, data, compact}) => {
    if (data) {
        return (
          <PriceTitleStyled compact>
            
              <JustifyLeft> {sym} </JustifyLeft>
              <ChangePercent data = {data}/>
           
            <div>${numberFormat(data.PRICE)}</div>
          </PriceTitleStyled>
        );
      }
      return <div />;
}

const PriceTitle = ({ sym, data }) => {
  if (data) {
    return (
      <PriceTitleStyled>
        <Header>
          <div> {sym} </div>
          <ChangePercent data = {data}/>
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
    return <TitleClass sym={sym} data={data} />;
  }

  return <div />;
};
