import React from "react";
import styled from "styled-components";

type Props = {
  options: string[];
};

function CustomSelect({ options }: Props) {
  return (
    <Select>
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </Select>
  );
}

export default CustomSelect;

const Select = styled.select`
  width: 500px;
  height: 50px;
  font-size: 16px;
  margin-top: 16px;
`;
