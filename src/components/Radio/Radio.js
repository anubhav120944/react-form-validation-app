import React from "react";
import "../MainForm.css";
function Radio(props) {
  const { onChange, gender, error } = props;

  return (
    <div className="gender-details">
      <input
        type="radio"
        name="gender"
        id="dot-1"
        value="Male"
        placeholder="Male"
        onChange={onChange}
        checked={gender === "Male"}
      />
      <input
        type="radio"
        name="gender"
        id="dot-2"
        value="Female"
        placeholder="Female"
        onChange={onChange}
        checked={gender === "Female"}
      />
      <input
        type="radio"
        name="gender"
        id="dot-3"
        value="Others"
        placeholder="Others"
        onChange={onChange}
        checked={gender === "Others"}
      />
      <span className="gender-title">Gender*</span>
      <div className="category">
        <label htmlFor="dot-1">
          <span className="dot one"></span>
          <span className="gender">Male</span>
        </label>
        <label htmlFor="dot-2">
          <span className="dot two"></span>
          <span className="gender">Female</span>
        </label>
        <label htmlFor="dot-3">
          <span className="dot three"></span>
          <span className="gender">Others</span>
        </label>
      </div>
      {error && <span className="error-display" style={{color: "red"}}>{error}</span>}
    </div>
  );
}

export default Radio;
