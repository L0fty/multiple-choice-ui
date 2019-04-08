import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.background};
`;

const SectionInfo = (id, name, number) => {
  return <Container />;
};

export default SectionInfo;
