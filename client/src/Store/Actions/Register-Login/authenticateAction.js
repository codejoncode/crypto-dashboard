import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  AUTHENTICATION_ATTEMPTED,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESSFUL
} from "../../Reducers/Register-Login/authenticateConstants";

const backendUrl = "http://localhost:4001/";

export const registerOrLogin = body => {
  const userEndPoint = "users";
  const postUser = backendUrl + userEndPoint
  const promise = axios.post(postUser, body);
  return dispatch => {
    dispatch({ type: AUTHENTICATION_ATTEMPTED });
    promise
      .then(results => {
        console.log(results.data);
        dispatch({ type: AUTHENTICATION_SUCCESSFUL, payload: results.data });
        //CHECK WHAT WE WOULD LIKE TO RETURN AND / DISPLAY
        //localstorage the users   id  will defintely need this on local storage
        toastr.success("Success", `Welcome back ${results.data.user.username}`); // once I check / adjust what returns I will udpate this to the usersname in the toastr messae
      })
      .catch(error => {
        dispatch({ type: AUTHENTICATION_FAILED, payload: error });
        console.log(error)
        toastr.error("Login Failed", "We were not able to authenticate you.");
      });
  };
};
