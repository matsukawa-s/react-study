import * as React from 'react';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import GenderCell from "./GenderCell";
import InterestCell from "./InterestCell";
import useFetchUsers from "../hooks/useFetchUsers";
import User from "../types/User";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Dialog, DialogActions, DialogTitle, IconButton} from "@mui/material";
import {useEffect, useState} from "react";
import DeleteButtonDialog from "./DeleteButtonDialog";
import {useNavigate} from "react-router-dom";

const UserListTable: React.VFC = () => {
    const navigate = useNavigate();
    const { users, fetchUsers } = useFetchUsers();

    const moveEdit = (user: User) =>{
        navigate(`/users/${user.id}/edit`);
    }

    const columns: GridColDef[] = [
        {
            field: 'userId',
            headerName: 'ユーザーID',
            headerAlign: 'left',
            width: 100,
            flex: 1,
        },
        {
            field: 'mail',
            headerName: 'メールアドレス',
            headerAlign: 'left',
            width: 150,
            flex: 2
        },
        {
            field: 'age',
            headerName: '年齢',
            headerAlign: 'left',
            width: 100,
            flex: 1
        },
        {
            field: 'gender',
            headerName: '性別',
            headerAlign: 'left',
            width: 100,
            flex: 1,
            renderCell: (params: GridRenderCellParams<number, User>) =>
                <GenderCell gender={params.value}/>
        },
        {
            field: 'job',
            headerName: '仕事',
            headerAlign: 'left',
            width: 150,
            flex: 2
        },
        {
            field: 'interests',
            headerName: '趣味',
            headerAlign: 'left',
            width: 150,
            flex: 3,
            renderCell: (params: GridRenderCellParams<string[], User>) =>
                <InterestCell interests={params.value}/>
        },
        {
            field: "actions",
            headerName: "",
            flex: 1,
            renderCell: (params: GridRenderCellParams) =>{
                return(
                    <>
                        <IconButton onClick={() => moveEdit(params.row)}>
                            <EditIcon />
                        </IconButton>
                        <DeleteButtonDialog user={params.row} callback={fetchUsers}/>
                    </>
                )
            }
        }
    ];

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
};

export default UserListTable;
