import React, { useState } from "react";
import "../MainForm.css";
const FormInput = (props) => {
  const [error, setError] = useState(false);
  const { label, errorMessage, onChange, pattern, id, ...inputProps } = props;

  const handleFocus = (e) => {
    if (!pattern.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="input-box">
      <span className="details">{label}*</span>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} />
      {error && <span className="error-display" style={{color: "red"}}>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
