import React, {Component} from 'react';
import { withRouter } from "react-router";
import './App.css';
import AppLayout from '../App/AppLayout';
import NavBar from './NavBar';
import AppProvider from './AppProvider';
import Content from '../Shared/Content';
import Main from "./Main";


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
            <Main />
          </Content>
        </AppProvider>
      </AppLayout>
    )

  }

  }

export default App;
