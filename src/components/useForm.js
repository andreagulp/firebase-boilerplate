import { useState, useEffect } from "react";

function useForm(initialState, validate, submit) {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validationErrors = validate(value);
    setErrors(validationErrors);
  }, [validate, value]);

  const handleChangeField = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit();
  };

  return {
    value,
    handleChangeField,
    errors,
    handleSubmit
  };
}

export default useForm;
