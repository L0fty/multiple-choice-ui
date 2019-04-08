import React from "react";
import styled from "styled-components";
import { fetchProblems } from "../API";
import SectionInfo from "../components/sectionInfo/SectionInfo";
import { QuestionContainer } from "../components/question/Question";
import { ProblemSelector } from "../components/problemSelector/ProblemSelector";
import { SideContainer } from "../components/sideContainer/SideContainer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Practice extends React.Component {
  state = {
    sectionId: "default section",
    sectionName: "default name",
    sectionNumber: 0,
    problems: [],
    selectedProblem: null
  };

  componentDidMount() {
    fetchProblems().then(response =>
      this.setState({
        sectionId: response.sectionId,
        sectionName: response.sectionName,
        sectionNumber: response.sectionNumber,
        problems: response.problems,
        selectedProblem: 0
      })
    );
  }

  render() {
    const {
      sectionId,
      sectionName,
      sectionNumber,
      problems,
      selectedProblem
    } = this.state;

    const problemData = problems[selectedProblem] || {};

    return (
      <Container>
        <ProblemSelector />
        <QuestionContainer question={problemData.question} />
        <SideContainer
          choices={problemData.choices}
          answer={problemData.answer}
          solution={problemData.solution}
        />
        <SectionInfo id={sectionId} name={sectionName} number={sectionNumber} />
      </Container>
    );
  }
}

export default Practice;
