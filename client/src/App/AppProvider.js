import React, { Component } from "react";

const cc = require("cryptocompare");
export const AppContext = React.createContext();
export const MAX_FAVORITES = 10;

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
    //   ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      siteName: "CrytoDash",
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      firstVisit : true
    };
  }
  /* without the constructor i can not set the state to methods apart of the class. Without the constructor it will show up as undefined */
  // state = {
  //     page: 'dashboard',
  //     setPage: this.setPage
  // }

  componentDidMount = () => {
    this.fetchCoins();
    this.savedSettings();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  setPage = page => this.setState({ page });

  savedSettings = () => {
    let cryptoDashboardData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashboardData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites } = cryptoDashboardData;
    this.setState({ favorites, firstVisit: false })
    return {favorites};
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
  };

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES && favorites.includes(key) === false) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    favorites = favorites.filter(coin => coin !== key);
    this.setState({ favorites });

    /* if loadash is desired  opted not to use load ash after installing I feel filter is just fine*/
    // this.setState({favorites: _.pull(favorites, key)})
    // would have to import _ from 'loadash';  
  };
  isInFavorites = key => this.state.favorites.includes(key);
  // loadash way  _.includes(this.state.favorites, key) 

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
