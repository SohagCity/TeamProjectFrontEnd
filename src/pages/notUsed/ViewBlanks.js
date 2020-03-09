import React, { Component } from "react";
import "../../App.scss";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    },
    table: {
      minWidth: 650
    }
  }
});

class ViewBlanks extends Component {
  state = {
    blanks: [
      { id: "44400000000", assigned: "Adivsor1", status: "valid" },
      { id: "44400000001", assigned: "Adivsor3", status: "void" },
      { id: "44400000002", assigned: "Adivsor2", status: "valid" }
    ]
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Blanks</h2>
          <TableContainer className={classes.table}>
            <Table
              size="small"
              aria-label="simple table"
              style={{
                width: "640px",
                border: "1px solid",
                margin: "auto"
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Blank ID</TableCell>
                  <TableCell align="center">Assigned To</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.blanks.map(blank => (
                  <TableRow key={blank.id}>
                    <TableCell align="center" component="th" scope="row">
                      {blank.id}
                    </TableCell>
                    <TableCell align="center">{blank.assigned}</TableCell>
                    <TableCell align="center">{blank.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(ViewBlanks);
