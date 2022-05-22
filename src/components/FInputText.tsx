import React from "react";
import InputText from "./InputText";
import {
  Control,
  Controller,
} from "react-hook-form";

export type FInputTextProps =  & {
    name: string,
    control: Control<any>
};

// react-hook-form
const FInputText = ({
    name,
    control,
    ...rest
}: FInputTextProps) =>{
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, onBlur } }) =>
                <InputText
                    {...rest}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            }
        />
    );
};

export default FInputText;
