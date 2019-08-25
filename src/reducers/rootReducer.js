import { combineReducers } from "redux";
import routeReducer from "./routeReducer";
import highlightsReducer from "./highlightsReducer";
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
  highlights: highlightsReducer,
  route: routeReducer,
  error: errorReducer
});
