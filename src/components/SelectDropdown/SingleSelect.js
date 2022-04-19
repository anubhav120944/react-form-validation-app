import React, { useEffect } from "react";
import "../MainForm.css";

function SingleSelect(props) {
  const { onChange, profession, error, errors, subProfession,setValues } = props;


  const Software_Trainee = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const Junior_Software_Developer = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const Senior_Software_Developer = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  let type = null;

  let options = null;

  if (profession === "Software Trainee") {
    type = Software_Trainee;
  }
  if (profession === "Junior Software Developer") {
    type = Junior_Software_Developer;
  }
  if (profession === "Senior Software Developer") {
    type = Senior_Software_Developer;
  }

  useEffect( ()=> {
    if(profession === 'HR') {
      setValues((previousInputs) => {
        return{
          ...previousInputs,
          subProfession : ''
        }
      })
    }
  },[profession,setValues])
  
  if (type) {
    options = type.map((el) => (
      <option value={el} key={el}>
        {el}
      </option>
    ));
  }

  return (
    <div className="user-details">
      <div className="input-box">
        <span className="details">Profession*</span>
        <select name="profession" value={profession} onChange={onChange}>
          <option value="">--Select--</option>
          <option>Software Trainee</option>
          <option>Junior Software Developer</option>
          <option>Senior Software Developer</option>
          <option >HR</option>
        </select>
        <br />
        {error && (
          <span className="error-display" style={{ color: "red" }}>
            {error}
          </span>
        )}
      </div>

      {type && (
        <div className="input-box">
          <span className="details">Categories</span>
          <select
            name="subProfession"
            value={subProfession}
            onChange={onChange}
          >
            <option value="">--Select--</option>
            {options}
          </select>
          <br />
          {errors && (
          <span className="error-display" style={{ color: "red" }}>
            {errors}
          </span>
        )}
        </div>
      )}
    </div>
  );
}

export default SingleSelect;
