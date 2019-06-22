import { createReducer } from "../reducerUtil";
import {
  AUTHENTICATION_SUCCESSFUL,
  AUTHENTICATION_FAILED
} from "./authenticateConstants";

const initialState = [];

const loginUserSuccess = (state, payload) => {
  console.log(payload);
  return;
};

const loginUserFailed = (state, payload) => {
  console.log(payload);
  return;
};

export default createReducer(initialState, {
  [AUTHENTICATION_SUCCESSFUL]: loginUserSuccess,
  [AUTHENTICATION_FAILED]: loginUserFailed
});
