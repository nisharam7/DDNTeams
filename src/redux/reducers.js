import {combineReducers} from "redux";
import teamItemsReducer from "./team_items/reducer";

const rootReducer = combineReducers({
  teamItems: teamItemsReducer,
});

export default rootReducer;
