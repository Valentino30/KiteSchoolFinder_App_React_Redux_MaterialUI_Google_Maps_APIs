import { LOAD_HIGHLIGHTS, UNLOAD_HIGHLIGHTS } from "../actions/types";

const initialState = {
  highlights: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HIGHLIGHTS:
      return {
        ...state,
        highlights: action.payload
      };
    case UNLOAD_HIGHLIGHTS:
      return {
        ...state,
        highlights: []
      };
    default:
      return state;
  }
};
