import React from "react";
import styled from "styled-components";
import ProblemPreview from "./ProblemPreview";

const ProblemSelectorContainer = styled.section`
  width: 10vw;
  height: 89vh;
  margin: 1.5vh 10px 1.5vh 0;
  background-color: ${props => props.theme.dim};
  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  margin: 16px;
  flex-grow: 1;
  overflow: hidden;
  :hover {
    overflow: auto;
  }
  display: flex;
  flex-direction: column;
  transition: overflow 300ms ease;
`;

const ProblemSelector = props => {
  const { problems, selectedProblem, handleProblemChange } = props;
  return (
    <ProblemSelectorContainer>
      <ListWrapper>
        {problems.map(problem => (
          <ProblemPreview
            key={problem.problemId}
            selected={selectedProblem === problem.problemId}
            onClick={() => handleProblemChange(problem.problemId)}
          >
            {problem.problemId + 1}
          </ProblemPreview>
        ))}
      </ListWrapper>
    </ProblemSelectorContainer>
  );
};

export default ProblemSelector;
