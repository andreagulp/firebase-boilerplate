import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

function InputField({
  name,
  type,
  label,
  value,
  handleChange,
  isInvalid,
  isRequired,
  isAutoFocus
}) {
  const errorIcon = {
    endAdornment: isInvalid && (
      <InputAdornment position="end">
        <IconButton edge="end" aria-label={isInvalid}>
          <Tooltip
            placement="right-end"
            title={isInvalid}
            aria-label={isInvalid}
          >
            <InfoIcon color="secondary" />
          </Tooltip>
        </IconButton>
      </InputAdornment>
    )
  };

  return (
    <TextField
      name={name}
      id={name}
      variant="outlined"
      margin="normal"
      required={isRequired}
      type={type}
      fullWidth
      label={label}
      value={value}
      onChange={handleChange}
      autoComplete={type}
      autoFocus={isAutoFocus}
      error={isInvalid ? true : false}
      InputProps={errorIcon}
    />
  );
}

export default InputField;
