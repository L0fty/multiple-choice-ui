import styled from "styled-components";

const Tab = styled.button`
  flex-grow: 1;
  border-bottom: 3px solid
    ${props => (props.selected ? props.theme.primary : props.theme.body)};
  background-color: ${props => props.theme.background};
  padding: 1vh;
  margin: 0 0.4vw;
  text-align: center;
  font-weight: bold;
  font-size: calc(2vh + 12px);
  color: ${props => props.theme.font};
  &:hover {
    background-color: ${props => props.theme.listHighlight};
    color: ${props => props.theme.logo};
  }
`;

export default Tab;
