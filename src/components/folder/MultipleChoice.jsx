import React from "react";
import Choice from "./Choice";

const choices = [0.45, 0.56, 0.75, 0.8];

const MultipleChoice = props => {
  const { selected, handleClick } = props;
  return (
    <div>
      {choices.map((option, index) => (
        <Choice
          selected={selected === option}
          option={option}
          key={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default MultipleChoice;
