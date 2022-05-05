import React, {ChangeEventHandler, FocusEventHandler} from "react";
import {
    FormHelperText,
    RadioGroupProps,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export type InputRadioGroupProps = {
    placeholder?: string,
    error?: string,
    values: InputRadioProps[]
};

export type InputRadioProps = {
  label: string,
  value: string | number
};

// view
const InputRadioGroup = (
    props: InputRadioGroupProps & {
        inputRef: RadioGroupProps['ref'],
        name: string,
        value: unknown,
        values: InputRadioProps[];
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    }
) => {
    const {
        placeholder,
        error,
        inputRef,
        value,
        values,
        onChange,
        onBlur,
    } = props;

    return (
        <>
            {/* 入力 */}
            <RadioGroup
                row
                ref={inputRef}
                // onChange={(e) => {
                //     const val = parseInt(e.target.value)
                //     if (!isNaN(val)) {
                //         onChange(val);
                //     }
                // }}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                value={value === undefined ? '' : value}
            >
                {values.map((x, index) =>
                    <FormControlLabel key={index} value={x.value} control={<Radio />} label={x.label} />
                )}
            </RadioGroup>
            {/* エラーメッセージ */}
            {error && <FormHelperText error>{error}</FormHelperText>}
        </>
    )
};

export default InputRadioGroup;
