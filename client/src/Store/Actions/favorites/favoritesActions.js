import axios from "axios";
import { toastr } from "react-redux-toastr";

import {
  UPDATE_FAVORITES_ATTEMPTED,
  UPDATE_FAVORITES_FAILED,
  UPDATE_FAVORITES_SUCCESSFUL,
  UPDATE_FAV_ATTEMPTED,
  UPDATE_FAV_FAILED,
  UPDATE_FAV_SUCCESSFUL
} from "../../Reducers/favorites/favoritesConsts";

const backendUrl = "http://localhost:4001/";

export const updateFavorites = (body, token, id) => {
  const favoritesEndPoint = `favorites/${id}`;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const putFavoritesEndPoint = backendUrl + favoritesEndPoint;
  const promise = axios.put(putFavoritesEndPoint, body, headers);
  return dispatch => {
    dispatch({ type: UPDATE_FAVORITES_ATTEMPTED });
    promise
      .then(results => {
        console.log(results.data);
        dispatch({ type: UPDATE_FAVORITES_SUCCESSFUL, payload: results.data });
        toastr.success("Success", "You successfully updated your favorites!");
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: UPDATE_FAVORITES_FAILED, payload: error });
        toastr.error("Update Failed", "Unable to update your favorites");
      });
  };
};

export const updateFav = (body, token, id) => {
  const favEndPoint = `favs/${id}`;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const putFavsEndPoint = backendUrl + favEndPoint;
  const promise = axios.put(putFavsEndPoint, body, headers);
  return dispatch => {
    dispatch({ type: UPDATE_FAV_ATTEMPTED });
    promise
      .then(results => {
        console.log(results.data);
        dispatch({ type: UPDATE_FAV_SUCCESSFUL, payload: results.data });
        toastr.success("Success", `You changed your fav to ${body.fav}`);
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: UPDATE_FAV_FAILED, payload: error });
        toastr.error("Update Failed", "Unable to update your current favorite");
      });
  };
};
