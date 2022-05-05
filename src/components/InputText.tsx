import React, {ChangeEventHandler, FocusEventHandler} from "react";
import {Chip, FormHelperText, Grid, InputLabel, OutlinedInput, OutlinedTextFieldProps, TextField} from "@mui/material";

export type InputTextProps = {
    placeholder?: string,
    error?: string,
};

// view
const InputText = (
    props: InputTextProps & {
        inputRef: OutlinedTextFieldProps['ref'],
        value: string;
        onChange: ChangeEventHandler<HTMLTextAreaElement>;
        onBlur: FocusEventHandler<HTMLTextAreaElement>;
    }
) => {
    const {
        placeholder,
        error,
        inputRef,
        value,
        onChange,
        onBlur
    } = props;

    return (
        <>
            {/* 入力 */}
            <OutlinedInput
                inputRef={inputRef}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                error={!!error}
                fullWidth
            />
            {/* エラーメッセージ */}
            {error && <FormHelperText error>{error}</FormHelperText>}
        </>
    )
};

export default InputText;
