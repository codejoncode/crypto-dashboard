import React, { Component } from "react";

const cc = require('cryptocompare');
export const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(), 
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      siteName : "CrytoDash"
    };
  }
  /* without the constructor i can not set the state to methods apart of the class. Without the constructor it will show up as undefined */
  // state = {
  //     page: 'dashboard',
  //     setPage: this.setPage
  // }

  componentDidMount = () => {
      this.fetchCoins();
  }

  fetchCoins = async () => {
      let coinList = (await cc.coinList()).Data;
      this.setState({coinList});
  }


  setPage = page => this.setState({ page });

  savedSettings = () => {
    let cryptoDashboardData = JSON.parse(localStorage.getItem('cryptoDash'));
    if(!cryptoDashboardData){
        return { page: 'settings', firstVisit: true}
    }
    return {}; 
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false, 
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }));
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
