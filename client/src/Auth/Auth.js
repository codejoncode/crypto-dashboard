/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
const LOGIN_SUCCESS_PAGE = "/settings";
const LOGIN_FAILURE_PAGE = "/";

class Auth {
  constructor(history) {
    this.history = history;
  }
  auth0 = new auth0.WebAuth({
    domain: "crypto-dashboard.auth0.com",
    clientID: "ZEvOn2qtAc5TyZmhttSQaqara1AzA4Ez",
    //redirectUrl: "http://localhost:3000/callback", // redirect after the authencation is used also added into the Auth0 applications tab and settings page section Allowed Callback URLs
    // audience: "https://crypto-dashboard.auth0.com/userinfo",
    redirectUrl: "https://crypto-dashboard-jjh.netlify.com/callback",
    audience: "crypto-backend-api", // need to be the API's audience
    responseType: "token id_token",
    scope: "openid profile email" //profile will provide the information from the users  social account  yarn add jwt-decode --save  to decode this data from the id_token
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthenticated = () => {
    console.log("handling authenticated");
    this.auth0.parseHash((err, authResults) => {
      console.log(authResults);
      console.log(err);
      if (authResults && authResults.accessToken && authResults.idToken) {
        //figure out if the user is still authenticated or if their token has expired.
        console.log("authenticated successful");
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = ""; // eslint  no restricted  needs comment on line one.
        // location.pathname = LOGIN_SUCCESS_PAGE;
        // this.props.history.push(LOGIN_SUCCESS_PAGE)
        this.history.push(LOGIN_SUCCESS_PAGE);
      } else if (err) {
        console.log("authenticated failed");
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  };

  isAuthenticated = () => {
    console.log("is authenticated");
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));

    return new Date().getTime() < expiresAt;
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE_PAGE;
  };

  getProfile = () => {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  };
}

export default Auth;
