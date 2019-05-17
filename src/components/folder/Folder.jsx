import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "./Tab";
import Choice from "./Choice";

const Container = styled.section`
  width: 40vw;
  margin: 1.5vh 0 1.5vh 10px;
  background-color: ${props => props.theme.dim};
  height: 81vh;
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
    selectedTab: "Answer"
  };

  render() {
    const { selectedTab } = this.state;
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
        <Choice selected={true} option={0} index={0} />
        <Choice selected={true} option={0} index={1} />
        <Choice selected={false} option={0} index={2} />
        <Choice selected={false} option={0} index={3} />
      </Container>
    );
  }
}

export default Folders;
