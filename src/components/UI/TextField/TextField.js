import React from "react";

import { TextField, MenuItem } from "@material-ui/core";

const TextFieldComponent = (props) => {
  const [value, setValue] = React.useState("");

  let selectOptions = [
    {
      value: null,
      label: "",
    },
  ];
  if (props.selectOptions) {
    selectOptions = props.selectOptions;
  }

  const handleChange = (event) => {
    props.stateValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <TextField
      type={props.type}
      size="small"
      id={props.value}
      label={props.label}
      variant="outlined"
      color="primary"
      style={{ width: "100%" }}
      select={props.select}
      helperText={props.helperText}
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
    >
      {selectOptions.map((selectOption) => (
        <MenuItem key={selectOption.value} value={selectOption.value}>
          {selectOption.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default TextFieldComponent;
