import React, { useEffect, useRef } from "react";
import { TextField as MUITextField } from "@mui/material";

export enum TextFieldInputType {
  text = "text",
  password = "password",
  email = "email",
  number = "number",
}

interface Props {
  placeholder: string;
  inputType: TextFieldInputType;
}

const TextField: React.FC<Props> = ({ placeholder, inputType }) => {
  const inputRef = useRef<HTMLInputElement | undefined>();

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <MUITextField
      label={placeholder}
      variant="outlined"
      type={inputType}
      inputRef={inputRef}
    />
  );
};

export default TextField;
