import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const QuestionContainer = styled.section`
  margin: 1.5vh 10px;
  background-color: ${props => props.theme.dim};
  width: 50vw;
  height: 89vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: calc(1.5vh + 20px);
  font-weight: bold;
  margin: 16px;
`;

const Content = styled.div`
  font-size: calc(1vh + 10px);
  margin: 0 64px;
`;

const Question = props => {
  const { question, problemNumber } = props;
  const questionTitle = "Problem " + (problemNumber + 1) + ":";
  return (
    <QuestionContainer>
      <Title>{questionTitle}</Title>
      <Content>{question}</Content>
    </QuestionContainer>
  );
};

Question.propTypes = {
  problemNumber: PropTypes.number,
  question: PropTypes.string
};

export default Question;
