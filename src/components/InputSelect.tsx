import React from "react";
import {
    FormHelperText, MenuItem, Select, SelectProps,
} from "@mui/material";

export type InputSelectProps = {
    placeholder?: string,
    error?: string,
    definition: InputSelectItemProps[]
};

export type InputSelectItemProps = {
    value: string | number,
    display: string
};

// view
const InputSelect = (
    props: InputSelectProps & SelectProps
) => {
    const {
        error,
        definition,
    } = props;

    return (
        <>
            {/* 入力 */}
            <Select
                {...props}
                fullWidth
            >
                {
                    definition.map((x, index) =>
                        <MenuItem key={index} value={x.value}>
                            {x.display}
                        </MenuItem>
                    )
                }
            </Select>
            {/* エラーメッセージ */}
            {error && <FormHelperText error>{error}</FormHelperText>}
        </>
    )
};

export default InputSelect;
