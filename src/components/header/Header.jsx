// import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.primary};
`;

export default StyledHeader;
