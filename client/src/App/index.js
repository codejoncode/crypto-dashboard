import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from '../App/AppLayout';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage name = "Cyrpto"/>
      </AppLayout>
    );
  }

  }

export default App;
