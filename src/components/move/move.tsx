import { Button, Menu, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { store } from "../../store";
import { useNavigate, useParams } from "react-router";

export const Move: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { category, title } = useParams();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (to: string) => {
    setAnchorEl(null);
    if (typeof to === "string") {
      store.move(`/${category}/${title}`, `/${to}/${title}`);
      navigate(-1);
    }
  };

  const categories = store.state.listCategories;
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        переместить документ
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {categories.map(({ name }) => (
          <MenuItem key={name} onClick={() => handleClose(name)}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
