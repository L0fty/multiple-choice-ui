import styled from "styled-components";

const ProblemPreview = styled.button`
  background-color: ${props =>
    props.selected ? props.theme.darkest : props.theme.darker};
  padding: calc(2.5vh + 16px) 0;
  width: 6vw;
  text-align: center;
  margin: 20px auto 5px;
  border-radius: 2px;
  font-size: calc(1vh + 20px);
  border: 4px solid
    ${props => (props.selected ? props.theme.complement : props.theme.darker)};

  transition: border color 300ms ease;
  &:hover {
    background-color: ${props => props.theme.lighter};
    border: 4px solid ${props => props.theme.lighter};
  }
`;

export default ProblemPreview;
