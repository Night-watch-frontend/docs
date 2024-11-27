import { Box, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { TableDocs } from "../table";
import { observer } from "mobx-react-lite";
import { useLocation, useParams } from "react-router";
import { store } from "../../store";

export const InfoBlock: FC = observer(() => {
  const pathName = useLocation().pathname;
  const { category } = useParams();
  useEffect(() => {
    if (pathName === "/") {
      store.fetchAllFiles();
    }
  }, [pathName]);

  useEffect(() => {
    if (category) {
      store.fetchFileForCategory(category);
    }
  }, [category]);

  const listDocs = store.state.documents;

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography
        component="h2"
        variant="h6"
        marginBottom={2}
        sx={{ fontWeight: "bold", color: "var(--black)" }}
      >
        {category ? category : "Все документы"}
      </Typography>
      {listDocs.length !== 0 ? (
        <TableDocs rows={listDocs} href={category ? category : ""} />
      ) : (
        <Typography variant="h6" sx={{ color: "var(--black)" }}>
          Документы не найдены
        </Typography>
      )}
    </Box>
  );
});
