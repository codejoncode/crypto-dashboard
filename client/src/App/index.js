import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import AppLayout from '../App/AppLayout';
import NavBar from './NavBar';
import AppProvider from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';
import LandingPage from './LandingPage';


class App extends Component {
  render() {
    // return (
    //   <AppLayout>
    //     <AppProvider>
    //       <NavBar />
    //       <Content>
    //         <Settings />
    //         <Dashboard />
    //       </Content>
    //     </AppProvider>
    //   </AppLayout>
    // );
    return (
    <AppLayout>
        <AppProvider>
          <NavBar />
          <Content>
          <Switch>
            <Route exact path = "/" component = {LandingPage} />
            <Route path = "/settings" component = {Settings} />
            <Route path = "/dashboard" component = {Dashboard} />
          </Switch>
          </Content>
        </AppProvider>
      </AppLayout>
    )

  }

  }

export default App;
