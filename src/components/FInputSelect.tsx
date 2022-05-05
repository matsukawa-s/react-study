import React from "react";
import {
    Controller,
    FieldValues,
    UseControllerProps,
} from "react-hook-form";
import InputSelect, {InputSelectProps} from "./InputSelect";

export type FInputSelectProps<T> = InputSelectProps & UseControllerProps<T>;

// react-hook-form
const FInputSelect = <T extends FieldValues>(props: FInputSelectProps<T>) =>{
    const { name, control, definition } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={
                ({ field }) => (
                    <InputSelect
                        {...field}
                        definition={definition}
                    />
                )
            }
        />
    );
};

export default FInputSelect;
