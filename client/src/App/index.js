import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from '../App/AppLayout';
import NavBar from './NavBar';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <NavBar />
        <WelcomeMessage name = "Cyrpto"/>
      </AppLayout>
    );
  }

  }

export default App;
