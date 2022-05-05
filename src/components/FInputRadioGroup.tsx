import React from "react";
import {
  Controller,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import InputRadioGroup, {InputRadioGroupProps} from "./InputRadioGroup";

export type FInputRadioGroupProps<T> = InputRadioGroupProps & UseControllerProps<T>;

// react-hook-form
const FInputRadioGroup = <T extends FieldValues>(props: FInputRadioGroupProps<T>) =>{
  const { name, control, values } = props;
  // const {
  //   field,
  //   fieldState: { error },
  // } = useController<T>({ name, control });

  return (
    <Controller
      name={name}
      control={control}
      render={
        ({ field }) => (
          <InputRadioGroup
              inputRef={field.ref}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              values={values}
          />
        )
      }
    />
  );
};

export default FInputRadioGroup;
