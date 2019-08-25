import { LOAD_ERROR, UNLOAD_ERROR } from "../actions/types";

const initialState = {
  error: {
    status: "",
    message: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      return {
        ...state,
        error: {
          status: action.payload.error.status,
          message: action.payload.error.message
        }
      };
    case UNLOAD_ERROR:
      return {
        ...state,
        error: {
          status: "",
          message: ""
        }
      };
    default:
      return state;
  }
};
