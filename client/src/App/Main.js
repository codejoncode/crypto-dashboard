import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./Home/LandingPage";
import Dashboard from "../Dashboard";
import Settings from "../Settings";
import Callback from "../Auth/Callback";
import { AppContext } from "./AppProvider";

const Main = () => {
  return (
    <div>
      <AppContext.Consumer>
        {({ auth, getProfile, loginUser,registerOrLogin }) => (
          <Switch>
            <Route exact path="/" render={() => <LandingPage loginUser ={loginUser} />} /> 
            {/* auth.isAuthenticated() */}
            {/* <Route path="/settings" component={() => <Settings auth = {auth} registerOrLogin = {registerOrLogin}/>} /> */}
             {/* <Route path = "/settings" component = {auth.isAuthenticated() ? () => <Settings auth = {auth} registerOrLogin = {registerOrLogin}/> : <LandingPage loginUser = {loginUser} />} /> */}
            <Route path = "/settings" render={() => auth.isAuthenticated() ? (<Settings auth = {auth} registerOrLogin = {registerOrLogin}/>) : <Redirect to="/" />} />
            {/* <Route path="/dashboard" component={auth.isAuthenticated() ? Dashboard : LandingPage} /> */}
            <Route path="/dashboard" render={() => auth.isAuthenticated() ? (<Dashboard />) : <Redirect to = "/" />} />
            <Route path="/callback" component={() => <Callback auth = {auth}/>} />
          </Switch>
        )}
      </AppContext.Consumer>
    </div>
  );
};

export default Main;
