import { Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { FC } from "react";
import { NavLink } from "react-router";

interface INavAside {
  href: string;
  title: string;
}

export const Navigation: FC<INavAside> = ({ href, title }) => {
  return (
    <NavLink
      key={title}
      to={href}
      style={({ isActive }) => ({
        color: isActive ? "#535bf2" : "black",
      })}
    >
      <FolderIcon color="inherit" sx={{ mr: 2 }} />
      <Typography component={"span"}>{title}</Typography>
    </NavLink>
  );
};
