import React from "react";
import Choice from "./Choice";
import styled from "styled-components";

const ChoiceContainer = styled.div`
  overflow: auto;
  margin: 16px;
  flex-grow: 1;
`;

const SubmitButton = styled.button`
  height: calc(6vh + 32px);
  width: 90%;
  background-color: ${props =>
    props.disable ? props.theme.light : props.theme.primary};
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 800;
  font-size: calc(3vh + 20px);
  &:hover {
    background-color: ${props =>
      props.disable ? props.theme.light : props.theme.darkPrimary};
  }
`;

const MultipleChoice = props => {
  const { selected, handleClick, goToSolution, answer, choices = [] } = props;
  const disableSubmit = selected === null;
  return (
    <>
      <ChoiceContainer>
        {choices.map((option, index) => (
          <Choice
            selected={selected === option}
            option={option}
            key={index}
            handleClick={handleClick}
          />
        ))}
      </ChoiceContainer>

      <SubmitButton
        disable={disableSubmit}
        onClick={() => (disableSubmit ? {} : goToSolution(selected === answer))}
      >
        {disableSubmit ? "Select an option..." : "Check Answer"}
      </SubmitButton>
    </>
  );
};

export default MultipleChoice;
