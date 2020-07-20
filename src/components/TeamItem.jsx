import React, {useState} from "react";
import styled from "styled-components";

const TeamItemName = styled.div`
`;

const TeamItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default (props) => {
  return (
    <TeamItemContainer>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onToggleChecked(props.id)}
      />
      <TeamItemName checked={props.checked}>{props.name}</TeamItemName>
    </TeamItemContainer>
  );
};
