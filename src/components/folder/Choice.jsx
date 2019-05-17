import React from "react";
import styled from "styled-components";

const OptionContainer = styled.button`
  background-color: ${props => props.theme.dark};
  height: 60px;
  width: 85%;
  margin: 20px auto 5px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: ${props => props.theme.light};
    color: ${props => props.theme.lightest};
  }
`;

const ColorBar = styled.div`
  background-color: ${props => props.theme.complement};
  height: 60px;
  width: 4px;
  border-radius: 1px;
`;

const Choice = props => {
  const { selected, option, index } = props;
  const label = index + 1;
  return (
    <OptionContainer selected={selected}>
      {selected && <ColorBar />} {label + ": " + option}
    </OptionContainer>
  );
};

export default Choice;
