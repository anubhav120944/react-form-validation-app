import { useState } from "react";
import "./MainForm.css";
import { validations } from "./Config.js";

import CheckBox from "./CheckBox/CheckBox";
import FormInput from "./FormInput/FormInput";
import MultiSelect from "./MultiSelectDropdown/MultiSelect";
import Radio from "./Radio/Radio";
import SingleSelect from "./SelectDropdown/SingleSelect";

function MainForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    username: "",
    gender: "",
    profession: "",
    subProfession: "",
  });

  const initialErrorState = {
    radioError: "",
    singleSelectError: "",
    multiSelectError: "",
    checkboxError: "",
    confirmPasswordError: "",
  };

  const [stateSkills, setStateSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [inputsError, setInputsError] = useState(initialErrorState);
 

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter a Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: /^[A-Za-z0-9]{3,16}$/,
    },

    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      errorMessage: "Name must be of atleast 3 characters!",
      label: "Name",
      pattern: /^[A-Za-z]{3,36}$/,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },

    {
      id: 4,
      name: "phone",
      type: "number",
      placeholder: "Enter your Phone no.",
      errorMessage: "It should be a valid 10 digit number",
      label: "Phone no.",
      pattern: /^\d{10}$/,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    },

    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern:
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isInvalid, ...error } = validations({
      ...values,
      stateSkills,
      hobbies,
    });
    console.log(values.profession.length)
    if (isInvalid) {
      setInputsError((prevInputsError) => {
        return {
          ...prevInputsError,
          ...error,
        };
      });

      return;
    }

    console.log({ ...values, stateSkills, hobbies });
    alert("Your Form is Submitted Successfully...!!");
    setInputsError(initialErrorState);
    setValues({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      username: "",
      gender: "",
      profession: "",
      subProfession: "",
    });
    setHobbies([]);
    setStateSkills([]);
  };

  const onChange = (e) => {
    setValues((previousValue) => {
      return { ...previousValue, [e.target.name]: e.target.value };
    });
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setStateSkills([...stateSkills, value]);
    } else {
      const updatedSkillState = stateSkills.filter((e) => e !== value);
      setStateSkills(updatedSkillState);
    }
  };

  const handleHobbiesChange = (value) => {
    setHobbies([...value]);
  };



  const buttonDisabled =
    values.name &&
    values.email &&
    values.phone &&
    values.username &&
    values.password &&
    values.confirmPassword;

  return (
    <div className="container">
      <div className="title">PROFILE FORM</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            {/* <p style={{ color: "red", fontSize: "12px" }}>
              * All fields are required!
            </p>
            <br /> */}
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <Radio
            error={inputsError.radioError}
            gender={values.gender}
            onChange={onChange}
          />

          <SingleSelect
            error={inputsError.singleSelectError}
            profession={values.profession}
            subProfession={values.subProfession}
            onChange={onChange}
          />

          <MultiSelect
            error={inputsError.multiSelectError}
            hobbies={hobbies}
            handleChange={handleHobbiesChange}
          />
          <br />
          <CheckBox
            error={inputsError.checkboxError}
            skills={stateSkills}
            handleChange={handleSkillsChange}
          />
          {/* <button className="button" disabled={!buttonDisabled}>
            Submit
          </button> */}
          <div className="button">
            <input type="submit" disabled={!buttonDisabled} value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainForm;
