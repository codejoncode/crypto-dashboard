import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import moment from "moment";
import Auth from "../Auth/Auth";
import { registerOrLogin } from "../Store/Actions/Register-Login/authenticateAction";
import { updateFav, updateFavorites } from "../Store/Actions/favorites/favoritesActions";

const cc = require("cryptocompare");
export const AppContext = React.createContext();
export const MAX_FAVORITES = 10;
const TIME_UNITS = 12;
const auth = new Auth();

const actions = {
  registerOrLogin,
  updateFav,
  updateFavorites
}

const mapState = state => {
  console.log(state)
  return {
    user : state.user
  }
}
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: this.props.user.favorites && this.props.user.favorites.join(" ") || ["BTC", "ETH", "XMR", "DOGE"], //either a thing on the redux state or use the default settings
      // if the favorites includes the fav on state use it if it doesn't grab the first from the list if it is a thing or  set it to the default fav. 
      currentFavorite :   this.props.user.fav || "BTC",
      timeInterval : "months", 
      //   ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      siteName: "CrytoDash",
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      //   firstVisit : true,
      setFilteredCoins: this.setFilteredCoins,
      currencyType: "USD",
      setCurrentFavorite: this.setCurrentFavorite, 
      changeChartSelect: this.changeChartSelect,
      // auth,
      auth : new Auth(this.props.history),
      getProfile: this.getProfile,
      loginUser : this.loginUser,
      user: this.props.user,
      registerOrLogin: this.props.registerOrLogin,


    };
  }
  /* without the constructor i can not set the state to methods apart of the class. Without the constructor it will show up as undefined */
  // state = {
  //     page: 'dashboard',
  //     setPage: this.setPage
  // }

  componentDidMount = async () => {
    await this.savedSettings();
    await this.fetchCoins();
    await this.fetchPrices();
    await this.fetchHistorical();
  };

  getProfile = () => {
    const nickname = this.state.auth.getProfile().nickname;
    const email = this.state.auth.getProfile().email;
    // const picture = this.state.auth.getProfile().picture;
    // const name = this.state.auth.getProfile().name;

    console.log(nickname);
    console.log(email); 
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("email", email); 
  }
  // log the user in after get the details of the users profile and then login the user in to the backend. 
  loginUser = async () => {
    await this.state.auth.login();
   
    
  }

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment().subtract({[this.state.timeInterval]: TIME_UNITS - index}).valueOf(),
          ticker.USD
        ])
      }
    ]
    this.setState({historical});
  };

  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units >=0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          [this.state.currencyType],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      );
    }
    return Promise.all(promises);// when all data comes back it will return. 
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;

    this.setState({ coinList });
  };

  setPage = page => {
    this.setState({ page },this.props.history.push(page))
  };

  savedSettings = () => {
    let cryptoDashboardData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashboardData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites, currentFavorite } = cryptoDashboardData;
    this.setState({ favorites, firstVisit: false, currentFavorite });
    return { favorites, currentFavorite };
  };

  setCurrentFavorite = sym => {
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym
      })
    );
    // this.props.updateFav();
    
    this.setState({
      currentFavorite: sym,
      historical: null,
    },this.fetchHistorical);
  };
  
  reduxFavorites = (currentFav = false) => {
    /**takes an optional paramater currentFav
     * If currentFav is set to true then the updateFav function will be called
     * If the currentFav is left at false  then updateFavorites will run. 
     * This function serves the purpose of getting the token and id from local storage
     * creating a body based off current fav and then running the appropriate function. 
     */
    const token = localStorage.getItem("access_token");
    const id = localStorage.getItem("user_id");
    if(currentFav === false){
      const body = {favorites : this.state.favorites.join(" ")};
      this.props.updateFavorites(body, token, id)
    } else if (currentFav === true){
      const body = {fav : this.state.currentFavorite}
      this.props.updateFav(body, token, id);
    }
  }

  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    //^^ may want to change this. 
    this.reduxFavorites()
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite,
        prices: null, 
        historical: null, 
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      })
    );
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    this.setState({ prices });
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        /* add an option to allow a user to select the currency maybe from a drop down then modify this part here.  */
        let priceData = await cc.priceFull(
          this.state.favorites[i],
          this.state.currencyType
        );
        returnData.push(priceData);
      } catch (error) {
        console.warn("Fetch price error: ", error);
      }
    }
    return returnData;
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

  setFilteredCoins = filteredCoins => {
    this.setState({ filteredCoins });
  };

  changeChartSelect = (value) => {
    this.setState({timeInterval: value, historical : null}, this.fetchHistorical);
  }

  render() {
    console.log(this.state.user);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
// export default withRouter(AppProvider);
export default withRouter( connect(mapState, actions)(AppProvider));
