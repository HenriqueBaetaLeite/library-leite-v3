const validateEmail = (email) => {
  const isEmailValid = email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/i);

  return isEmailValid;
};

export default validateEmail;
