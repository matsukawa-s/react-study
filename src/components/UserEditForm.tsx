import React, {useEffect, useMemo, useState} from "react";
import {UserInputs} from "./UserCreateHookForm";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import InputWithTopLabel from "./InputWithTopLabel";
import FInputText from "./FInputText";
import FInputNumber from "./FInputNumber";
import FInputRadioGroup from "./FInputRadioGroup";
import FInputSelect from "./FInputSelect";
import CheckBoxList from "./CheckBoxList";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import useUser from "../hooks/useUser";
import {jobSelectValues} from "../constants/interestsList";
import {interestsCheckBoxList} from "../constants/jobList";
import {genderRadioGroupValues} from "../constants/genderList";

export type UserEditFormProps = {
    id: string | undefined
}

const UserEditForm: React.VFC<UserEditFormProps> = ({ id }) => {
    const navigate = useNavigate();
    const { loading, user, selectUser } = useUser();

    const onSubmit: SubmitHandler<UserInputs> = async (data) => {
        try{
            const res = await axios.patch(`http://localhost:3001/users/${id}`,{
                user_id: data.userId,
                mail: data.mail,
                age: Number(data.age),
                gender: Number(data.gender),
                job: data.job,
                interests: data.interests
            });

            // 一覧画面へ遷移
            navigate("/users");

        }catch (ex){

        }
    };

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        getValues
    } = useForm<UserInputs>({
        defaultValues:{
            userId: "",
            mail: "",
            age: 0,
            gender: 0,
            job: "",
            interests: []
        }
    });

    useEffect(() => {
        if (id === undefined) {
            return;
        }

        selectUser(id);
    }, []);

    useEffect(() => {
        reset(user);
    }, [user]);

    return(
        loading
            ? <CircularProgress />
            : <>
                <Typography variant="h5" component="div" sx={{ mt: 1, mb: 1 }}>
                    ユーザ編集
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWithTopLabel label="ユーザID" sx={{ mb: 2 }} needInput>
                        <FInputText name="userId" control={control} />
                    </InputWithTopLabel>
                    <InputWithTopLabel label="メールアドレス" sx={{ mb: 2 }} needInput>
                        <FInputText name="mail" control={control} />
                    </InputWithTopLabel>
                    <InputWithTopLabel label="年齢" sx={{ mb: 2 }} needInput>
                        <FInputNumber name="age" control={control} />
                    </InputWithTopLabel>
                    <InputWithTopLabel label="性別" sx={{ mb: 2 }} needInput>
                        <FInputRadioGroup name="gender" values={genderRadioGroupValues} control={control}/>
                    </InputWithTopLabel>
                    <InputWithTopLabel label="職業" sx={{ mb: 2 }} needInput>
                        <FInputSelect definition={jobSelectValues} name="job" control={control}/>
                    </InputWithTopLabel>
                    <InputWithTopLabel label="趣味" sx={{ mb: 2 }} needInput>
                        <CheckBoxList
                            name="interests"
                            definition={interestsCheckBoxList}
                            setValue={setValue}
                            getValues={getValues}
                            control={control}
                        />
                    </InputWithTopLabel>

                    <Box>
                        <Button type="submit" variant="contained" style={{ minWidth: "120px" }}>保存</Button>
                    </Box>
                </form>
            </>
    );
}

export default UserEditForm;