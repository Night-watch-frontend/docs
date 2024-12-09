import { Box, Button, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { store } from "../../store";
import { observer } from "mobx-react-lite";
import { Move } from "../move";
import { Modal } from "../modal";

export const FileDoc: FC = observer(() => {
  const { category, title } = useParams();
  const [loading, setLoading] = useState<boolean>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    store.fetchFile(`${category}/${title}`);
  }, [category, title]);

  const href = store.state.path;

  /*   const handleClick = () => {
    alert("Вы действительно хотите удалить этот документ");
  }; */

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography
        component="h2"
        variant="h6"
        marginBottom={2}
        sx={{ fontWeight: "bold", color: "var(--black)" }}
      >
        {`${category}/${title}`}
      </Typography>
      <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%" }}>
        <img
          onLoad={() => setLoading(false)}
          alt="Picture of the author"
          src={href}
          width={600}
          height={650}
          style={loading ? { display: "none" } : { display: "block" }}
        />
        <Move />
        <Button onClick={handleClickOpen}>Удалить</Button>
      </Box>
      <Modal onClose={handleClose} open={open} path={`${category}/${title}`} />
      {loading && (
        <Box
          component={"div"}
          sx={{ color: "var(--black)", textAlign: "center" }}
        >
          <Typography component={"span"} variant="h6">
            Loading...
          </Typography>
        </Box>
      )}
    </Box>
  );
});
