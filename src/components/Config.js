export const validations = (formFields) => {
  let radioError = "";
  let singleSelectError = "";
  let subSingleSelectError ="";
  let multiSelectError = "";
  let checkboxError = "";
  let confirmPasswordError = "";
  let isInvalid = false;

  const { gender, profession, subProfession, stateSkills, hobbies,password,confirmPassword } = formFields;

  if (gender.length === 0) {
    radioError = "Gender must be selected.";
  }

  if (profession.length === 0) {
    singleSelectError = "Profession can not be empty.";
  }

  if (stateSkills.length === 0) {
    checkboxError = "Choose one or more skills.";
  }

  if((profession !== "HR") && subProfession.length === 0)
  {
    subSingleSelectError = "Choose any of the subprofession!"
  }
  if(profession === "HR")
  {
    subSingleSelectError = ""
  }

  if (hobbies.length === 0) {
    multiSelectError = "Choose one or more hobbies.";
  }
  
  
  if (password !== confirmPassword) {
     confirmPasswordError = "Passwords do not match!";
  }

  if (radioError || singleSelectError || multiSelectError || checkboxError || confirmPasswordError || subSingleSelectError) {
    isInvalid = true;
  }

  return {
    isInvalid,
    radioError,
    singleSelectError,
    subSingleSelectError,
    multiSelectError,
    checkboxError,
    confirmPasswordError
  };
};
