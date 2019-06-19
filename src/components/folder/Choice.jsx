import React from "react";
import styled from "styled-components";

const OptionContainer = styled.button`
  background-color: ${props =>
    props.selected ? props.theme.darkest : props.theme.darker};
  height: calc(5vh + 32px);
  width: 85%;
  margin: 20px auto 5px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px 1px
    ${props => (props.selected ? props.theme.secondary : props.theme.dark)};
  border-left: 6px solid
    ${props => (props.selected ? props.theme.complement : props.theme.dark)};

  &:hover {
    background-color: ${props => props.theme.lighter};
    border-left: 6px solid
      ${props => (props.selected ? props.theme.complement : props.theme.light)};
  }
`;

const ChoiceText = styled.span`
  align-self: center;
  text-align: center;
  flex-grow: 1;
  font-size: calc(1vh + 20px);
`;

const Choice = props => {
  const { selected, option, handleClick } = props;

  return (
    <OptionContainer
      selected={selected}
      onClick={() => handleClick(selected ? null : option)}
    >
      <ChoiceText>{option}</ChoiceText>
    </OptionContainer>
  );
};

export default Choice;
