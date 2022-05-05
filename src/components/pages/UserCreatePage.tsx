import React from "react";
import Header from "../Header";
import UserCreateForm from "../UserCreateForm";
import UserCreateHookForm from "../UserCreateHookForm";
import {Container} from "@mui/material";

const UserCreatePage: React.VFC = () => {
    return (
        <>
            <Header />
            <Container>
                <UserCreateHookForm />
            </Container>
        </>
    )
};

export default UserCreatePage;
