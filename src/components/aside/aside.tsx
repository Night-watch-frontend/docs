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
    <Box
      component="aside"
      display={"flex"}
      flexDirection={"column"}
      flexShrink={0}
      width={"300px"}
      padding={2}
      sx={{ borderRight: "2px solid #000" }}
    >
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
        {navList.map((navLink) => (
          <ListItem key={navLink.name}>
            <Navigation
              key={navLink.name}
              href={navLink.name}
              title={navLink.name}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
});
