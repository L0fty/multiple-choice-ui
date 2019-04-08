import React from "react";
import styled from "styled-components";
import { fetchProblems } from "../API";
import SectionInfo from "../components/sectionInfo/SectionInfo";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Practice extends React.Component {
  state = {
    sectionId: "default section",
    sectionName: "default name",
    sectionNumber: 0,
    problems: []
  };

  componentDidMount() {
    fetchProblems().then(response =>
      this.setState({
        sectionId: response.sectionId,
        sectionName: response.sectionName,
        sectionNumber: response.sectionNumber,
        problems: response.problems
      })
    );
  }

  render() {
    return (
      <Container>
        <SectionInfo />
      </Container>
    );
  }
}

export default Practice;
