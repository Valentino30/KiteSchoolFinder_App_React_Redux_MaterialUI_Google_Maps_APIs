import axios from "axios";
import { loadError } from "./errorActions";
import {
  LOAD_ORIGIN,
  LOAD_RADIUS,
  LOAD_DIRECTIONS,
  LOAD_DESTINATION,
  UNLOAD_DESTINATION,
  UNLOAD_ORIGIN,
  UNLOAD_DIRECTIONS
} from "./types";

export const loadOrigin = origin => dispatch => {
  dispatch({
    type: LOAD_ORIGIN,
    payload: origin
  });
};

export const loadRadius = radius => dispatch => {
  dispatch({
    type: LOAD_RADIUS,
    payload: radius
  });
};

export const loadDirections = ({ origin, destination }) => dispatch => {
  const apiKey = "YOUR_API_KEY";
  axios
    .get(
      // getting cors policy out of the way with heroku
      "https://cors-anywhere.herokuapp.com/" +
        "https://maps.googleapis.com/maps/api/directions/json?origin=" +
        origin.lat +
        "," +
        origin.lng +
        "&destination=" +
        destination.lat +
        "," +
        destination.lng +
        "&key=" +
        apiKey
    )
    .then(res => {
      if (
        res.data.status === "ZERO_RESULTS" ||
        res.data.status === "NOT_FOUND"
      ) {
        dispatch(
          loadError({
            error: {
              status: 404,
              message: "No roads found, try a different school"
            }
          })
        );
      } else {
        dispatch({
          type: LOAD_DIRECTIONS,
          payload: res.data.routes[0].legs[0]
        });
      }
    });
};

export const loadDestination = destination => dispatch => {
  dispatch({
    type: LOAD_DESTINATION,
    payload: destination
  });
};

export const unloadOrigin = () => dispatch => {
  dispatch({
    type: UNLOAD_ORIGIN
  });
};

export const unloadDestination = () => dispatch => {
  dispatch({
    type: UNLOAD_DESTINATION
  });
};

export const unloadDirections = () => dispatch => {
  dispatch({
    type: UNLOAD_DIRECTIONS
  });
};
