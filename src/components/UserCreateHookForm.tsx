import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, Typography} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import FInputText from "./FInputText";
import InputWithTopLabel from "./InputWithTopLabel";
import FInputRadioGroup from "./FInputRadioGroup";
import {InputRadioProps} from "./InputRadioGroup";
import {InputSelectItemProps} from "./InputSelect";
import FInputSelect from "./FInputSelect";
import CheckBoxList, {CheckBoxProps} from "./CheckBoxList";
import FInputNumber from "./FInputNumber";

export type UserInputs = {
    userId: string,
    mail: string,
    age: number | null,
    // UserType.Gender
    gender: number | null,
    job: string,
    interests: string[]
};

const UserCreateHookForm: React.VFC = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        setValue,
        getValues
    } = useForm<UserInputs>({
        defaultValues:{
            userId: "",
            mail: "",
            age: null,
            gender: null,
            job: "",
            interests: []
        }
    });

    const genderRadioGroupValues: InputRadioProps[] = [
        {
            label: "男性",
            value: 1
        },
        {
            label: "女性",
            value: 2
        },
        {
            label: "その他",
            value: 0
        }
    ];

    const jobSelectValues: InputSelectItemProps[] = [
        {
            value: "エンジニア",
            display: "エンジニア"
        },
        {
            value: "美容師",
            display: "美容師"
        },
        {
            value: "公務員",
            display: "公務員"
        },
        {
            value: "料理人",
            display: "料理人"
        },
        {
            value: "研究者",
            display: "研究者"
        },
    ];

    const interestsCheckBoxList: CheckBoxProps[] = [
        {
            value: "ゲーム"
        },
        {
            value: "プログラミング"
        },
        {
            value: "ショッピング"
        },
        {
            value: "カフェ巡り"
        },
        {
            value: "映画鑑賞"
        },
        {
            value: "ドライブ"
        },
    ];

    const onSubmit: SubmitHandler<UserInputs> = async (data) => {
        try{
            const res = await axios.post("http://localhost:3001/users",{
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

    return (
        <>
            <Typography variant="h5" component="div" sx={{ mt: 1, mb: 1 }}>
                新規ユーザ登録
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
                    <Button type="submit" variant="contained" style={{ minWidth: "120px" }}>登録</Button>
                </Box>
            </form>
        </>
    );
}

export default UserCreateHookForm;