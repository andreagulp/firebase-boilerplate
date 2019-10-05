import { useState, useEffect } from "react";

function useForm(initialState, validate, submit) {
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validationErrors = validate(user);
    setErrors(validationErrors);
  }, [validate, user]);

  const handleChangeField = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit();
  };

  return {
    user,
    handleChangeField,
    errors,
    handleSubmit
  };
}

export default useForm;
