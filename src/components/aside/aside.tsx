import { FC, useEffect } from "react";
import { Navigation } from "../navigation";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import { Box, List, ListItem, Typography } from "@mui/material";

export const Aside: FC = observer(() => {
  useEffect(() => {
    store.fetchCategories();
  }, []);

  const navList = store.state.listCategories;

  return (
    <Box component="aside" display={"flex"} flexDirection={"column"}>
      <Typography
        variant="subtitle1"
        component="h3"
        sx={{ color: "#000", fontWeight: "bold" }}
      >
        Категории документов
      </Typography>
      <List>
        <ListItem>
          <Navigation href="/" title="Все документы" />
        </ListItem>
      </List>

      {navList.map((navLink) => (
        <ListItem key={navLink.name}>
          <Navigation
            key={navLink.name}
            href={navLink.name}
            title={navLink.name}
          />
        </ListItem>
      ))}
    </Box>
  );
});
