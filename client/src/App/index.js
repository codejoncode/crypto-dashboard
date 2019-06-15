import React, {Component} from 'react';
import './App.css';
import AppLayout from '../App/AppLayout';
import NavBar from './NavBar';
import AppProvider from './AppProvider';
import Settings from '../Settings';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <NavBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }

  }

export default App;
