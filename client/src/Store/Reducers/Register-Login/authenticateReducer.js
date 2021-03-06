import { createReducer } from "../reducerUtil";
import {
  AUTHENTICATION_SUCCESSFUL,
  AUTHENTICATION_FAILED
} from "./authenticateConstants";

import {
  UPDATE_FAVORITES_FAILED,
  UPDATE_FAVORITES_SUCCESSFUL,
  UPDATE_FAV_FAILED,
  UPDATE_FAV_SUCCESSFUL
} from "../favorites/favoritesConsts";

const initialState = [];

const loginUserSuccess = (state, payload) => {
  console.log(payload);
  return payload;
};

const loginUserFailed = (state, payload) => {
  console.log(payload);
  return { ...state, error: payload };
};

const updateUserFavoritesSuccess = (state, payload) => {
  return { ...state, favorites: payload };
};

const updateUserFavoritesFailed = (state, payload) => {
  return { ...state, error: payload };
};

const updateUserFavSuccess = (state, payload) => {
  return { ...state, fav: payload };
};

const updateUserFavFailed = (state, payload) => {
  return { ...state, error: payload };
};

export default createReducer(initialState, {
  [AUTHENTICATION_SUCCESSFUL]: loginUserSuccess,
  [AUTHENTICATION_FAILED]: loginUserFailed,
  [UPDATE_FAVORITES_SUCCESSFUL]: updateUserFavoritesSuccess,
  [UPDATE_FAVORITES_FAILED]: updateUserFavoritesFailed,
  [UPDATE_FAV_SUCCESSFUL]: updateUserFavSuccess,
  [UPDATE_FAV_FAILED]: updateUserFavFailed
});
