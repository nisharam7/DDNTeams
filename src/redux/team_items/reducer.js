import {SET_TEAM_ITEM, TOGGLE_TEAM_ITEM} from "./actions";

const initialState = {
  byId: {},
};

const teamItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM_ITEM:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.teamItem.id]: action.teamItem,
        },
      };
    case TOGGLE_TEAM_ITEM:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            checked: !state.byId[action.id].checked,
          },
        },
      };
    default:
      return state;
  }
};

export default teamItemReducer;
