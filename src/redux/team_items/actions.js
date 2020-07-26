export const SET_TEAM_ITEM = "SET_TEAM_ITEM";
export const TOGGLE_TEAM_ITEM = "TOGGLE_TEAM_ITEM";

export const setTeamItem = (teamItem) => {
  return {
    type: SET_TEAM_ITEM,
    teamItem: teamItem,
  };
};

export const toggleTeamItem = (id) => {
  return {
    type: TOGGLE_TEAM_ITEM,
    id,
  };
};
