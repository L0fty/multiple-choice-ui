import styled from "styled-components";

const Tab = styled.button`
  flex-grow: 1;
  border-bottom: 3px solid
    ${props => (props.selected ? props.theme.primary : props.theme.dark)};
  background-color: ${props => props.theme.dim};
  padding: 1vh;
  margin: 0 0.4vw;
  text-align: center;
  font-weight: bold;
  font-size: calc(2vh + 12px);
  &:hover {
    background-color: ${props => props.theme.light};
    color: ${props => props.theme.lightest};
  }
`;

export default Tab;
