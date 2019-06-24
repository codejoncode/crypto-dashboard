import React, { Component } from "react";

class LandingPage extends Component {
  authenticateUser = async () => {
    console.log(`Am I authenticated `);
    await this.props.auth.login();
  };
  render() {
    return (
      <div>
        <button onClick={this.props.loginUser}>
          {/* <a href="https://crypto-dashboard.auth0.com/login?client=ZEvOn2qtAc5TyZmhttSQaqara1AzA4Ez">Login</a> */}
          Login
        </button>
      </div>
    );
  }
}

export default LandingPage;
