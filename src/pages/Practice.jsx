import React from "react";
import styled from "styled-components";
import { fetchProblems } from "../API";
import SectionInfo from "../components/sectionInfo/SectionInfo";
import Question from "../components/question/Question";
import ProblemSelector from "../components/problemSelector/ProblemSelector";
import Folder from "../components/folder/Folder";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Practice extends React.Component {
  state = {
    sectionId: "default section",
    sectionName: "default name",
    sectionNumber: 0,
    sections: [],
    problems: [],
    selectedProblem: null
  };

  componentDidMount() {
    fetchProblems().then(response =>
      this.setState({
        sectionId: response.sectionId,
        sectionName: response.sectionName,
        sectionNumber: response.sectionNumber,
        sections: response.sections,
        problems: response.problems,
        selectedProblem: 0
      })
    );
  }

  handleProblemChange = problemId => {
    this.setState({ selectedProblem: problemId });
  };
  render() {
    const {
      sectionId,
      sectionName,
      sectionNumber,
      sections,
      problems,
      selectedProblem
    } = this.state;

    const problemData = problems[selectedProblem] || {};
    return (
      <Container>
        <ProblemSelector
          problems={problems}
          selectedProblem={selectedProblem}
          handleProblemChange={this.handleProblemChange}
        />
        <Question
          question={problemData.question}
          problemNumber={selectedProblem}
        />
        <Folder
          choices={problemData.choices}
          answer={problemData.answer}
          solution={problemData.solution}
          sections={sections}
          sectionId={sectionId}
        />
        <SectionInfo id={sectionId} name={sectionName} number={sectionNumber} />
      </Container>
    );
  }
}

export default Practice;
