import React, {ChangeEventHandler, FocusEventHandler} from "react";
import {FormHelperText, OutlinedInput, OutlinedTextFieldProps} from "@mui/material";

export type InputNumberProps = {
    placeholder?: string,
    error?: string,
};

const InputNumber = (
    props: InputNumberProps & {
        inputRef: OutlinedTextFieldProps['ref'],
        value: number;
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

    return(
        <>
            {/* 入力 */}
            <OutlinedInput
                type="number"
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
    );
}
export default InputNumber;