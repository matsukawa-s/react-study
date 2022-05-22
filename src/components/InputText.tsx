import React, {ChangeEventHandler, FocusEventHandler} from "react";
import {
    Chip,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    OutlinedTextFieldProps,
    TextField,
    TextFieldProps
} from "@mui/material";

export type InputTextProps = Omit<TextFieldProps, 'name'> & {
    placeholder?: string,
    error?: string,
};

// view
const InputText = (props: InputTextProps) => {
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
