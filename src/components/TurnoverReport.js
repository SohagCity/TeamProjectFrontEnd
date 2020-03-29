import React, { Component } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../App.scss";

const useStyles = theme => ({
  table: {
    minWidth: 700
  }
});
class TurnoverReport extends Component {
  state = {
    agent: "",
    date: "",
    data: [
      {
        stockFrom: "",
        stockTo: "",
        stockAmount: "",
        substockCode: "",
        subStockFrom: "",
        subStockTo: "",
        subStockAmount: "",
        assignedFrom: "",
        assignedTo: "",
        assignedAmount: "",
        assignedCode: "",
        usedFrom: "",
        usedTo: "",
        usedAmount: "",
        usedCode: "",
        amountFrom: "",
        amountTo: "",
        amountAmount: "",
        subAmountFrom: "",
        subAmountTo: "",
        subAmountAmount: "",
        subAmountCode: ""
      }
    ],
    totals: {
      agentStock: 0,
      subAgentStock: 0,
      used: 0,
      assigned: 0,
      agentAmount: 0,
      subAgentAmounts: 0
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="table">
        <br></br>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                AGENT: {this.state.agent} {"\n"}
                report period: {this.state.date}
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={28}>
                  AGENT'S STOCK STATUS REPORT
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>NN</TableCell>
                <TableCell align="center" colSpan={5}>
                  RECIEVED BLANKS
                </TableCell>
                <TableCell align="center" colSpan={5}>
                  ASSIGNED BLANKS
                </TableCell>
                <TableCell align="center" colSpan={5}>
                  FINAL AMOUNTS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  AGENT'S STOCK
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  SUB AGENTS'
                </TableCell>
                <TableCell align="center" colSpan={5}>
                  SUB AGENTS'
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  AGENT'S AMOUNT
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  SUB AGENTS' AMOUNT
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">FROM/TO BLANKS NBRS</TableCell>
                <TableCell align="center">AMNT</TableCell>
                <TableCell align="center">CODE</TableCell>
                <TableCell align="center">FROM/TO BLANKS NBRS</TableCell>
                <TableCell align="center">AMNT</TableCell>
                <TableCell align="center">CODE</TableCell>
                <TableCell align="center">ASSIGNED (FROM/TO)</TableCell>
                <TableCell align="center">AMNT</TableCell>
                <TableCell align="center">USED (FROM/TO)</TableCell>
                <TableCell align="center">AMNT</TableCell>
                <TableCell align="center">FROM/TO</TableCell>
                <TableCell align="center">AMNT</TableCell>
                <TableCell align="center">CODE</TableCell>
                <TableCell align="center">FROM/TO</TableCell>
                <TableCell align="center">AMNT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => {
                return (
                  <TableRow key={row}>
                    <TableCell></TableCell>
                    <TableCell>{row.stockFrom + "-" + row.stockTo}</TableCell>
                    <TableCell>{row.stockAmount}</TableCell>
                    <TableCell>{row.substockCode}</TableCell>
                    <TableCell>
                      {row.subStockFrom + "-" + row.subStockTo}
                    </TableCell>
                    <TableCell>{row.subStockAmount}</TableCell>
                    <TableCell>{row.assignedCode}</TableCell>
                    <TableCell>
                      {row.assignedFrom + "-" + row.assignedTo}
                    </TableCell>
                    <TableCell>{row.assignedAmount}</TableCell>
                    <TableCell>{row.usedFrom + "-" + row.usedTo}</TableCell>
                    <TableCell>{row.usedAmount}</TableCell>
                    <TableCell>{row.amountFrom + "-" + row.amountTo}</TableCell>
                    <TableCell>{row.amountAmount}</TableCell>
                    <TableCell>{row.subAmountCode}</TableCell>
                    <TableCell>
                      {row.subAmountFrom + "-" + row.subAmountTo}
                    </TableCell>
                    <TableCell>{row.subAmountAmount}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell>TOTALS</TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.agentStock}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.subAgentAmounts}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.assigned}</TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.used}</TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.agentAmount}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.subAgentAmounts}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(TurnoverReport);
