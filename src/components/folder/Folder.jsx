import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.section`
  width: 40vw;
  margin: 1.5vh 0 1.5vh 10px;
  background-color: ${props => props.theme.background};
  height: 81vh;
`;

class Folders extends React.Component {
  static propTypes = {
    choices: PropTypes.array,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    solution: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    return <Container />;
  }
}

export default Folders;
