import React from "react";
import InputText, { InputTextProps } from "./InputText";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export type FInputTextProps<T> = InputTextProps & UseControllerProps<T>;

// react-hook-form
const FInputText = <T extends FieldValues>(props: FInputTextProps<T>) =>{
  const { name, control, ...other } = props;
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
      <InputText
        inputRef={ref}
        error={error && error.message}
        {...rest}
        {...other}
      />
  );
};

export default FInputText;
