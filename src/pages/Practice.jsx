import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fetchProblems } from "../API";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  width: 100%;
`;

class Practice extends React.Component {
  state = {
    sectionId: "default section",
    sectionName: "default name",
    sectionNumber: 0,
    problems: []
  };

  componentDidMount() {
    debugger;
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
    return <Container />;
  }
}

export default Practice;
