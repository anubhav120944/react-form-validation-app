import React from "react";
import "./SingleSelect.css";

function SingleSelect(props) {
  const { onChange, profession, error } = props;
  return (
    <div className="select-box">
      <label>Profession*</label>
      <select name="profession" value={profession} onChange={onChange}>
        <option>--Select--</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Electronics">Electronics</option>
        <option value="Mechnical">Mechnical</option>
        <option value="Civil">Civil</option>
      </select>
      {error && <span>{error}</span>}
    </div>
  );
}

export default SingleSelect;
