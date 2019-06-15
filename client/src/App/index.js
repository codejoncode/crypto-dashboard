import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from '../App/AppLayout';
import NavBar from './NavBar';
import AppProvider from './AppProvider';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <NavBar />
          <WelcomeMessage name = "Cyrpto"/>
        </AppProvider>
      </AppLayout>
    );
  }

  }

export default App;
