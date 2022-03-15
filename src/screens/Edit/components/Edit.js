import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import EditStudent from "../../Modal/components/EditStudent";
import EditBook from "../../Modal/components/EditBook";
export default function EditEntites({
  open,
  handleClose,
  handleOpen,
  rows,
  heading,
  student,
}) {
  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.values(heading).map((head) => (
                <TableCell>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.fname}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(row).map((cell) => (
                  <TableCell component="th" scope="row">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" sx={{ m: 3 }} onClick={handleOpen}>
        Edit
      </Button>
      {student ? (
        <EditStudent open={open} handleClose={handleClose} />
      ) : (
        <EditBook open={open} handleClose={handleClose} />
      )}
    </Grid>
  );
}
