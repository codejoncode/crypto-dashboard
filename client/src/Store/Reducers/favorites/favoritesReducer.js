import { createReducer } from "../reducerUtil";
import {
  UPDATE_FAVORITES_FAILED,
  UPDATE_FAVORITES_SUCCESSFUL,
  UPDATE_FAV_FAILED,
  UPDATE_FAV_SUCCESSFUL
} from "./favoritesConsts";

const initialState = [];

const updateUserFavoritesSuccess = (state, payload) => {
  console.log(payload);
  return { favorites: payload };
};

const updateUserFavoritesFailed = (state, payload) => {
  console.log(payload);
  return { ...state, error: payload };
};

const updateUserFavSuccess = (state, payload) => {
  console.log(payload);
  return { fav: payload };
};

const updateUserFavFailed = (state, payload) => {
  console.log(payload);
  return { ...state, error: payload };
};

export default createReducer(initialState, {
  [UPDATE_FAVORITES_SUCCESSFUL]: updateUserFavoritesSuccess,
  [UPDATE_FAVORITES_FAILED]: updateUserFavoritesFailed,
  [UPDATE_FAV_SUCCESSFUL]: updateUserFavSuccess,
  [UPDATE_FAV_FAILED]: updateUserFavFailed
});
