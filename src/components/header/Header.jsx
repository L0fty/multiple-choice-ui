import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 8vh;
  background-color: ${props => props.theme.primary};
`;

const AppName = styled.span`
  font-size: 5vh;
  color: ${props => props.theme.logo};
  margin-left: 16px;
  padding: 1vh 16px;
  font-weight: 800;
  font-style: italic;
`;

const Header = () => {
  return (
    <StyledHeader>
      <AppName>Rapid</AppName>
    </StyledHeader>
  );
};

export default Header;
