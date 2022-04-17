import React from "react";
import "./CheckBox.css";

const options = [
  "ReactJs",
  "NodeJs",
  "AngularJs",
  "Java",
  "C",
  "Python",
  "Devops",
  "Testing",
];

function CheckBox(props) {
  const { handleChange, skills, error } = props;

  return (
    <div className="check-skills">
      <label className="check-box">Skills*</label>
      <div className="check-wrap">
        {options.map((data) => {
          return (
            <div key={data} className="check-box">
              <input
                type="checkbox"
                name="skills"
                value={data}
                onChange={handleChange}
              />
              <label className="check">{data}</label>
            </div>
          );
        })}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

export default CheckBox;
