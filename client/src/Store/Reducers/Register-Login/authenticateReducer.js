import { createReducer } from "../reducerUtil";
import {
  AUTHENTICATION_SUCCESSFUL,
  AUTHENTICATION_FAILED
} from "./authenticateConstants";

const initialState = [];

const loginUserSuccess = (state, payload) => {
  console.log(payload);
  return payload
};

const loginUserFailed = (state, payload) => {
  console.log(payload);
  return {error : payload};
};

export default createReducer(initialState, {
  [AUTHENTICATION_SUCCESSFUL]: loginUserSuccess,
  [AUTHENTICATION_FAILED]: loginUserFailed
});
