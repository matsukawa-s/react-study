import React from "react";
import Header from "../Header";
import {Container} from "@mui/material";
import UserEditForm from "../UserEditForm";
import {useLocation, useParams} from "react-router-dom";

const UserEditPage: React.VFC = () => {
    const urlParams = useParams<{ id: string }>();
    return (
        <>
            <Header />
            <Container>
                <UserEditForm id={urlParams.id}/>
            </Container>
        </>
    )
};

export default UserEditPage;
