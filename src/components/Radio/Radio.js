import React from "react";
import "./Radio.css";
function Radio(props) {
  const { onChange, gender, error } = props;

  return (
    <div>
      <div className="gender-select">
        <label className="gender-select">Gender*</label>
        <div className="gender-selected">
          <input
            type="radio"
            name="gender"
            value="Male"
            placeholder="Male"
            onChange={onChange}
            checked={gender === "Male"}
          />
          <label className="gen">Male</label>
        </div>
        <div className="gender-selected">
          <input
            type="radio"
            name="gender"
            value="Female"
            placeholder="Female"
            onChange={onChange}
            checked={gender === "Female"}
          />
          <label className="gen">Female</label>
        </div>
        <div className="gender-selected">
          <input
            type="radio"
            name="gender"
            value="Others"
            placeholder="Others"
            onChange={onChange}
            checked={gender === "Others"}
          />
          <label className="gen">Others</label>
        </div>
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

export default Radio;
