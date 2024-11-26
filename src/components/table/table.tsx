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
import { Link } from "react-router";
import { DataFile } from "../../services";

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
                  <Link
                    to={`/${
                      row.path
                        ? row.path.split("/").slice(2).join("/")
                        : href + "/" + row.name
                    }`}
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <img
                    src={row.preview}
                    width={30}
                    height={40}
                    alt={row.name}
                  ></img>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
