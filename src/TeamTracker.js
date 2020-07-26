import React, {useState, useEffect} from "react";
import TeamItem from "./components/TeamItem";
import {useDispatch, useSelector} from "react-redux";
import {setTeamItem, toggleTeamItem} from "./redux/team_items/actions";

/*
  {
    id: adfgsdfg,
    name: "Team Item",
    checked: false,
  }
*/

const TEAM_ITEMS_KEY = "team-items";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const createTeamItem = (name) => {
  return {
    id: uuidv4(),
    name: name,
    checked: false,
  };
};

const TeamApp = () => {
  const [newTeamName, setNewTeamName] = useState("");
  //const [teamItems, setTeamItems] = useState([]);

  const teamItems = useSelector((state) => state.todoItems.byId);
  const dispatch = useDispatch();

  const handleCreateTeam = () => {
    dispatch(setTodoItem(createTodoItem(newTodoName)));
  };

  useEffect(() => {
    if (teamItems.length > 0) {
      localStorage.setItem(TEAM_ITEMS_KEY, JSON.stringify(teamItems));
    }
  }, [teamItems]);

  useEffect(() => {
    const fetchedTeamItems = localStorage.getItem(TEAM_ITEMS_KEY);
    setTeamItems(JSON.parse(fetchedTeamItems) || []);
  }, []);

  const handleCreateTeam = () => {
    setTeamItems([...teamItems, createTeamItem(newTeamName)]);
  };

  const handleToggleChecked = (id) => {
    dispatch(toggleTeamItem(id));
  };

  return [
    <div 
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
     <h3>DDN Teams</h3>
     </div>,
     <div
     style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     }}>
      <input
        type="text"
        value={newTeamName}
        onChange={(event) => setNewTeamName(event.target.value)}
      />
      <button style = {{color:'purple'}}onClick={handleCreateTeam}>Create DDN Team</button>
      </div>,
      <div>
      {teamItems.map((item) => {
        return (
          <TeamItem
            id={item.id}
            name={item.name}
            checked={item.checked}
            onToggleChecked={handleToggleChecked}
          />
        );
      })}
    </div>
  ];
};

export default TeamApp;