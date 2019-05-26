import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "./Tab";
import MultipleChoice from "./MultipleChoice";

const Container = styled.section`
  width: 40vw;
  margin: 1.5vh 0 1.5vh 10px;
  background-color: ${props => props.theme.dim};
  height: 81vh;
  position: relative;
`;

const TabGroup = styled.div`
  width: 100%;
  display: flex;
`;

class Folders extends React.Component {
  static propTypes = {
    choices: PropTypes.array,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    solution: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  state = {
    selectedTab: "Answer",
    selectedChoice: null
  };

  handleChoiceClick = choice => {
    this.setState({ selectedChoice: choice });
  };

  render() {
    const { selectedTab, selectedChoice } = this.state;
    return (
      <Container>
        <TabGroup>
          <Tab
            selected={selectedTab === "Answer"}
            onClick={() => this.setState({ selectedTab: "Answer" })}
          >
            Answer
          </Tab>
          <Tab
            selected={selectedTab === "Solution"}
            onClick={() => this.setState({ selectedTab: "Solution" })}
          >
            Solution
          </Tab>
          <Tab
            selected={selectedTab === "Section"}
            onClick={() => this.setState({ selectedTab: "Section" })}
          >
            Section
          </Tab>
        </TabGroup>
        <MultipleChoice
          selected={selectedChoice}
          handleClick={this.handleChoiceClick}
        />
      </Container>
    );
  }
}

export default Folders;
