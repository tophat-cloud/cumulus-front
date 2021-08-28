import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "XSS", "Reflected XSS", 1, "Danger", "..."),
  createData(
    1,
    "CSRF",
    "게시물을 열람하면 CSRF 스크립트가 실행",
    2,
    "Danger",
    "..."
  ),
  createData(2, "XSS", "Reflected XSS", 3, "Danger", "..."),
  createData(
    3,
    "CSRF",
    "게시물을 열람하면 CSRF 스크립트가 실행",
    4,
    "Danger",
    "..."
  ),
  createData(4, "XSS", "Reflected XSS", 5, "Careful", "..."),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Vulnerabilities List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Vulnerability</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">etc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details{" "}
        </Link>
      </div>
    </React.Fragment>
  );
}
