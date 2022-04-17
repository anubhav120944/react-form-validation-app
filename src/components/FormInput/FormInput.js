import React, { useState } from "react";
import "./FormInput.css";
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
    <div className="formInput">
      <label>{label}*</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} />
      {error && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
