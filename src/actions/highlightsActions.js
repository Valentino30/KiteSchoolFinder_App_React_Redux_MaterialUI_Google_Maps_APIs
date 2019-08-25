import axios from "axios";
import { loadError } from "./errorActions";
import {
  LOAD_HIGHLIGHTS,
  UNLOAD_HIGHLIGHTS,
  UNLOAD_DESTINATION
} from "./types";

export const findNearbyHighlihgts = ({
  radius,
  originLat,
  originLng
}) => dispatch => {
  const keyword = "kite";
  const apiKey = "AIzaSyDeKuJqAAvQ9_b8cUfZ0d6tBlEW4Fz-908";
  axios
    .get(
      // getting cors policy out of the way with heroku
      "https://cors-anywhere.herokuapp.com/" +
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        originLat +
        "," +
        originLng +
        "&radius=" +
        radius * 1000 +
        "&keyword=" +
        keyword +
        "&key=" +
        apiKey
    )
    .then(res => {
      if (res.data.status === "INVALID_REQUEST") {
        dispatch(
          loadError({
            error: {
              status: 500,
              message: "Please enter city first"
            }
          })
        );
      } else if (res.data.status === "ZERO_RESULTS") {
        dispatch({
          type: UNLOAD_HIGHLIGHTS
        });
        dispatch({
          type: UNLOAD_DESTINATION
        });
        dispatch(
          loadError({
            error: {
              status: 404,
              message: "Nothing found, increase distance"
            }
          })
        );
      } else {
        dispatch({
          type: LOAD_HIGHLIGHTS,
          payload: res.data.results
        });
      }
    });
};

export const unloadHighlights = () => dispatch => {
  dispatch({
    type: UNLOAD_HIGHLIGHTS
  });
};
