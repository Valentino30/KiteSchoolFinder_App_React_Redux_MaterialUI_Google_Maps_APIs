import {
  LOAD_ORIGIN,
  LOAD_DESTINATION,
  LOAD_DIRECTIONS,
  UNLOAD_DESTINATION,
  LOAD_RADIUS,
  UNLOAD_ORIGIN,
  UNLOAD_DIRECTIONS
} from "../actions/types";

const initialState = {
  origin: {
    name: "",
    lat: "",
    lng: ""
  },
  destination: {
    name: "",
    lat: "",
    lng: ""
  },
  radius: { range: 10, metric: "km" },
  directions: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORIGIN:
      return {
        ...state,
        origin: {
          name: action.payload.originName,
          lat: action.payload.originLat,
          lng: action.payload.originLng
        }
      };
    case LOAD_RADIUS:
      return {
        ...state,
        radius: { range: action.payload, metric: "km" }
      };
    case LOAD_DESTINATION:
      return {
        ...state,
        destination: {
          name: action.payload.name,
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };
    case LOAD_DIRECTIONS:
      return {
        ...state,
        directions: action.payload
      };
    case UNLOAD_ORIGIN:
      return {
        ...state,
        origin: {
          name: "",
          lat: "",
          lng: ""
        }
      };
    case UNLOAD_DESTINATION:
      return {
        ...state,
        destination: {
          name: "",
          lat: "",
          lng: ""
        }
      };
    case UNLOAD_DIRECTIONS:
      return {
        ...state,
        directions: ""
      };
    default:
      return state;
  }
};
