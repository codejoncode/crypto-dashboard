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
        dispatch({ type: AUTHENTICATION_SUCCESSFUL, payload: results.data });
        //CHECK WHAT WE WOULD LIKE TO RETURN AND / DISPLAY
        toastr.success("Success", `Welcome back username`); // once I check / adjust what returns I will udpate this to the usersname in the toastr messae
      })
      .catch(error => {
        dispatch({ type: AUTHENTICATION_FAILED, error });
        toastr.error("Login Failed", "We were not able to authenticate you.");
      });
  };
};
