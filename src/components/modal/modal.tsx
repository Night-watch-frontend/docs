import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { FC } from "react";
import { Button } from "@mui/material";
import { store } from "../../store";
import { useNavigate } from "react-router";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  path: string;
}

export const Modal: FC<SimpleDialogProps> = (props: SimpleDialogProps) => {
  const { onClose, open, path } = props;
  const navigate = useNavigate();

  const handleDelete = (path: string) => {
    store
      .delete(`/${path}`)
      .then(() => {
        onClose();
        navigate(-1);
      })
      .catch(() => console.log("error"));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Вы действительно хотите удалить этот документ</DialogTitle>
      <Button onClick={onClose}>Нет</Button>
      <Button onClick={() => handleDelete(path)}>Да</Button>
    </Dialog>
  );
};
