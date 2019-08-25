import { LOAD_ERROR, UNLOAD_ERROR } from "./types";

export const loadError = error => dispatch => {
  dispatch({
    type: LOAD_ERROR,
    payload: error
  });
};

export const unloadError = () => dispatch => {
  dispatch({
    type: UNLOAD_ERROR
  });
};
