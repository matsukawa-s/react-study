import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import User from "../types/User";
import axios from "axios";

export type DeleteButtonDialogProps = {
    user: User
    callback: () => void
}

const DeleteButtonDialog: React.VFC<DeleteButtonDialogProps> = (props) => {
    const { user, callback } = props;
    const [open, setOpen] = useState(false); // 確認ダイアログの表示・非表示

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteRow = async (e: any, id: number) => {
        try {
            const res = await axios.delete(`http://localhost:3001/users/${id}`)
        }catch (ex){
            // 削除失敗
        }

        setOpen(false);
        callback();
    };

    return (
        <div>
            <IconButton　onClick={handleOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">確認</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">「{user.userId}」を本当に削除しますか？</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="primary" autoFocus>
                        キャンセル
                    </Button>
                    <Button onClick={(e) => deleteRow(e, user.id)} color="primary">
                        削除
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteButtonDialog;