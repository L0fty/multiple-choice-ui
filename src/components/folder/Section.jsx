import React from "react";
import styled from "styled-components";

const SectionContainer = styled.button`
  background-color: ${props =>
    props.selected ? props.theme.darkest : props.theme.darker};
  height: calc(5vh + 32px);
  width: 85%;
  margin: 20px auto 5px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px 1px
    ${props => (props.selected ? props.theme.secondary : props.theme.dark)};

  &:hover {
    background-color: ${props => props.theme.lighter};
  }
`;

const SectionNumber = styled.div`
  font-size: calc(1vh + 20px);
  padding: 0 32px;
  border-right: 3px solid ${props => props.theme.light};
`;

const SectionName = styled.span`
  align-self: center;
  text-align: center;
  flex-grow: 1;
  font-size: calc(1vh + 20px);
`;

const Section = props => {
  const { selected, sectionNumber, sectionName } = props;

  return (
    <SectionContainer selected={selected} onClick={() => {}}>
      <SectionNumber>{sectionNumber}</SectionNumber>
      <SectionName>{sectionName}</SectionName>
    </SectionContainer>
  );
};

export default Section;
