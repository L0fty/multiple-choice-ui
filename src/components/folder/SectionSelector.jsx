import React from "react";
import styled from "styled-components";
import Section from "./Section";

const SectionContainer = styled.div`
  overflow: auto;
  margin: 16px;
`;
const SectionSelector = props => {
  const { sections = [], selectedSection } = props;
  return (
    <SectionContainer>
      {sections.map(section => (
        <Section
          selected={section.sectionId === selectedSection}
          sectionName={section.sectionName}
          sectionNumber={section.sectionNumber}
          key={section.sectionId}
        />
      ))}
    </SectionContainer>
  );
};

export default SectionSelector;
