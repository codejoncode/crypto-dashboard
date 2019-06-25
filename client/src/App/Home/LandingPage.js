import React, { Component } from "react";
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
class LandingPage extends Component {
  authenticateUser = async () => {
    console.log(`Am I authenticated `);
    await this.props.auth.login();
  };
  render() {
    return (
      <div>
        {/* <p>Login Required</p>
        <button onClick={this.props.loginUser}> */}
          {/* <a href="https://crypto-dashboard.auth0.com/login?client=ZEvOn2qtAc5TyZmhttSQaqara1AzA4Ez">Login</a> */}
          {/* Login
        </button> */}
        <div>
        {/* <Segment circular style={square}>
          <Header as='h2'>
            Sale!
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment> */}
        <Segment circular inverted style={square} textAlign = 'center' onClick={this.props.loginUser}>
          <Header as='h2' inverted>
            Sign Up
            <Header.Subheader>or Login In</Header.Subheader>
          </Header>
        </Segment>
      </div>

      </div>
    );
  }
}

export default LandingPage;
