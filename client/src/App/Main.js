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
        {({ auth, getProfile }) => (
          <Switch>
            <Route exact path="/" component={() => <LandingPage auth = {auth} />} />
            <Route path="/settings" component={() => <Settings getProfile = {getProfile}/>} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/callback" component={() => <Callback auth = {auth}/>} />
          </Switch>
        )}
      </AppContext.Consumer>
    </div>
  );
};

export default Main;
