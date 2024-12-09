import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router";
import { DataFile } from "../../services";
import styles from "./table.module.css";

interface ITableDocsProps {
  rows: DataFile[];
  href: string;
}

export const TableDocs: FC<ITableDocsProps> = ({ rows, href }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 650 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Превью</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <NavLink
                    className={styles.link}
                    to={`/${
                      row.path
                        ? row.path.split("/").slice(2).join("/")
                        : href + "/" + row.name
                    }`}
                  >
                    {row.name}
                  </NavLink>
                </TableCell>
                <TableCell>
                  <img
                    src={row.preview}
                    width={30}
                    height={40}
                    alt={row.name}
                    onLoad={() => console.log("load")}
                  ></img>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
