import React from "react";
import Select from "react-select";
import "./MultiSelect.css";

function MultiSelect(props) {
  const { handleChange, hobbies, error } = props;

  const Hobbies = [
    {
      value: 1,
      label: "Singing",
    },

    {
      value: 2,
      label: "Dancing",
    },

    {
      value: 3,
      label: "Acting",
    },

    {
      value: 4,
      label: "Drawing",
    },

    {
      value: 5,
      label: "Comedian",
    },

    {
      value: 6,
      label: "Poetry",
    },

    {
      value: 7,
      label: "Coding",
    },
  ];

  return (
    <div className="multi-select-box">
      <label>Hobbies*</label>
      <Select
        isMulti
        name="hobbies"
        value={hobbies}
        options={Hobbies}
        onChange={handleChange}
      ></Select>
      {error && <span>{error}</span>}
    </div>
  );
}

export default MultiSelect;
