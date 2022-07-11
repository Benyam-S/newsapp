// validationService is a function that defines all the validation service functions
export default function validationService() {
  // validateName is a function that validates the name
  const validateName = (name) => {
    const isValidName = name.length > 2;
    return isValidName ? "" : "Please enter valid name.";
  };

  // validateEmail is a function that validates the email address
  const validateEmail = (email) => {
    const isValidEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );

    return isValidEmail ? "" : "Please enter valid email address.";
  };

  return {
    validateName,
    validateEmail,
  };
}
