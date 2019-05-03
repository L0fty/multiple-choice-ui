import React from "react";
import styled from "styled-components";

const OptionContainer = styled.div`
  background-color: ${props => props.theme.body};
  height: 60px;
  width: 95%;
  margin: 10px auto;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props =>
    props.selected ? props.theme.primary : props.theme.logo};
`;

const Choice = (selected, option) => {
  debugger;
  return (
    <OptionContainer>
      <Circle selected={false} />
    </OptionContainer>
  );
};

export default Choice;
