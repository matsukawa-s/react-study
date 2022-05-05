import React from "react";
import {Box, BoxProps, Chip, Grid, InputLabel} from "@mui/material";

export type InputWithTopLabel = {
    label: string
    needInput?: boolean
} & BoxProps

const InputWithTopLabel: React.VFC<InputWithTopLabel> = (props) => {
    const {
        children,
        label,
        needInput = false,
        sx
    } = props;

    return(
        <Box sx={sx}>
            {/* ラベル */}
            <Grid container alignItems="center" sx={{ mb: 1 }}>
                <Grid item>
                    <InputLabel sx={{ mr: 1 }} >{label}</InputLabel>
                </Grid>
                {
                    needInput &&
                    <Grid item sx={{ mr: 1 }}>
                        <Chip label="必須" color="error" size="small" />
                    </Grid>
                }
            </Grid>
            {children}
        </Box>
    );
}

export default InputWithTopLabel;