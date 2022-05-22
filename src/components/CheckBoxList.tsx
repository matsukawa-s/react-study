import React, {ChangeEvent} from "react";
import {
    Checkbox,
    FormGroup,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
    Controller,
    FieldValues,
    UseControllerProps,
} from "react-hook-form";

export type CheckBoxListProps<T> = {
    error?: string,
    definition: CheckBoxProps[],
    setValue: any
    getValues: any
} & UseControllerProps<T>;

export type CheckBoxProps = {
    value: string
};

// view
const CheckBoxList = <T extends FieldValues>(
    props: CheckBoxListProps<T>
) => {
    const { name, control, definition, setValue, getValues } = props;
    const handleCheck = (e: ChangeEvent<{}>, option: CheckBoxProps) => {
        const oldValue: string[] = getValues(name) || [];

        let newValue: string[] = [];
        if((e.target as HTMLInputElement).checked){
            newValue = [...oldValue, option.value];
        }else{
            newValue = oldValue?.filter((value) => value !== option.value);
        }

        setValue(name, newValue);

        // なぜリターン？
        return newValue;
    };

    return (
        <>
            {/* 入力 */}
            <Controller
                name={name}
                control={control}
                render={({ field }) =>(
                    <FormGroup row>
                        {
                            definition.map((x) =>
                                <FormControlLabel
                                    key={x.value}
                                    control={<Checkbox value={x.value} checked={field.value.includes(x.value)} />}
                                    label={x.value}
                                    onChange={(event) =>
                                        field.onChange(handleCheck(event, x))
                                    }
                                />)
                        }
                    </FormGroup>
                )}
            />
            {/* エラーメッセージ */}
            {/*{error && <FormHelperText error>{error}</FormHelperText>}*/}
        </>
    )
};

export default CheckBoxList;
