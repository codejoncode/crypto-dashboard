import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
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
            <Route exact path="/" component={() => <LandingPage loginUser ={loginUser} />} />
            <Route path="/settings" component={() => <Settings auth = {auth} registerOrLogin = {registerOrLogin}/>} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/callback" component={() => <Callback auth = {auth}/>} />
          </Switch>
        )}
      </AppContext.Consumer>
    </div>
  );
};

export default Main;
