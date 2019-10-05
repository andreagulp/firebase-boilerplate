export default function validateSignup(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}
