import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";

const Input = ({ ...props }: TextFieldProps) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled(TextField)<TextFieldProps>({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
});

export default Input;
