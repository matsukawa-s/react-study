import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import InputNumber, {InputNumberProps} from "./InputNumber";

export type FInputNumberProps<T> = InputNumberProps & UseControllerProps<T>;

// react-hook-form
const FInputNumber = <T extends FieldValues>(props: FInputNumberProps<T>) =>{
  const { name, control, ...other } = props;
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
      <InputNumber
        inputRef={ref}
        error={error && error.message}
        {...rest}
        {...other}
      />
  );
};

export default FInputNumber;
