import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "./Tab";
import MultipleChoice from "./MultipleChoice";
import Solution from "./Solution";
import SectionSelector from "./SectionSelector";

const Container = styled.section`
  width: 40vw;
  margin: 1.5vh 0 1.5vh 10px;
  background-color: ${props => props.theme.dim};
  height: 89vh;
  display: flex;
  flex-direction: column;
`;

const TabGroup = styled.div`
  width: 100%;
  display: flex;
`;

class Folders extends React.Component {
  static propTypes = {
    choices: PropTypes.array,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    solution: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sections: PropTypes.array
  };

  state = {
    answeredCorrectly: null,
    selectedTab: "Answer",
    selectedChoice: null
  };

  handleChoiceClick = choice => {
    this.setState({ selectedChoice: choice });
  };

  changeTab = tabName => {
    this.setState({ selectedTab: tabName });
  };

  goToSolution = answeredCorrectly => {
    this.setState({
      selectedTab: "Solution",
      answeredCorrectly: answeredCorrectly
    });
  };

  render() {
    const { selectedTab, selectedChoice } = this.state;
    const { sections, sectionId, choices, answer } = this.props;

    return (
      <Container>
        <TabGroup>
          <Tab
            selected={selectedTab === "Answer"}
            onClick={() => this.changeTab("Answer")}
          >
            Answer
          </Tab>
          <Tab
            selected={selectedTab === "Solution"}
            onClick={() => this.changeTab("Solution")}
          >
            Solution
          </Tab>
          <Tab
            selected={selectedTab === "Section"}
            onClick={() => this.changeTab("Section")}
          >
            Section
          </Tab>
        </TabGroup>
        {
          {
            Answer: (
              <MultipleChoice
                selected={selectedChoice}
                choices={choices}
                handleClick={this.handleChoiceClick}
                goToSolution={this.goToSolution}
                answer={answer}
              />
            ),
            Solution: <Solution solution={this.props.solution} />,
            Section: (
              <SectionSelector
                sections={sections}
                selectedSection={sectionId}
              />
            )
          }[selectedTab]
        }
      </Container>
    );
  }
}

export default Folders;
