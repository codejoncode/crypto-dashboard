import React from "react";
import { SearchingGrid, SearchInput, SearchHeader } from "./SettingsStyles";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  /*
   * uses lodash debounce will peform an action after a half second has passed
   */
  // Get all coin symbols
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  setFilteredCoins(filteredCoins);
  console.log(filteredCoins);
}, 500);

const filteredCoins = (e, setFilteredCoins, coinList) => {
  /*
   *Function wil grab the target value and then call another function
   * handleFilter will then do the work.
   */
  let inputValue = e.target.value;
  if(!inputValue){
    setFilteredCoins(null)
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

const Searching = () => {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchingGrid>
          <SearchHeader>Search all coins</SearchHeader>
          <SearchInput
            onKeyUp={e => filteredCoins(e, setFilteredCoins, coinList)}
          />
        </SearchingGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Searching;
