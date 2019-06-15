import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
// import styled, { css } from 'styled-components';



class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMessage name = "Cyrpto"/>
        <MyButton>Hello</MyButton>
      </div>
    );
  }

  }

export default App;
