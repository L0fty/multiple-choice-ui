import React from "react";
import styled from "styled-components";

const Content = styled.div`
  font-size: calc(1vh + 10px);
  margin: 64px;
`;

const Solution = props => {
  const { solution } = props;
  return <Content>{solution}</Content>;
};

export default Solution;
