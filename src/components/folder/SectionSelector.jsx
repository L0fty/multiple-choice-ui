import React from "react";
import Section from "./Section";

const SectionSelector = props => {
  const { sections = [], selectedSection } = props;
  return (
    <React.Fragment>
      {sections.map(section => (
        <Section
          selected={section.sectionId === selectedSection}
          sectionName={section.sectionName}
          sectionNumber={section.sectionNumber}
          key={section.sectionId}
        />
      ))}
    </React.Fragment>
  );
};

export default SectionSelector;
