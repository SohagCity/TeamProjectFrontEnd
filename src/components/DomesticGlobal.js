import React, { Component } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Tab
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../App.scss";

const useStyles = theme => ({
  table: {
    minWidth: 700
  }
});
class DomesticGlobal extends Component {
  state = {
    agent: "",
    date: "",
    data: [
      {
        agent: "",
        ttl: "",
        baseBGL: "",
        baseUSD: "",
        taxes: "",
        cash: "",
        cheque: "",
        invoice: "",
        nmbr: "",
        usd: "",
        bgl: "",
        paid: "",
        c1: "",
        c2: ""
      }
    ],
    totals: {
      nTickets: 0,
      ttls: 0,
      baseBGL: 0,
      baseUSD: 0,
      taxes: 0,
      cash: 0,
      cheque: 0,
      invoice: 0,
      nmbr: 0,
      usd: 0,
      bgl: 0,
      paid: 0,
      c1: 0,
      c2: 0,
      totalC1: 0,
      totalC2: 0,
      net1: 0,
      net2: 0
    },
    commissions: [1, 2]
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
                Sales period: {this.state.date}
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={28}>
                  GLOBAL SALES REPORT (DOMESTIC)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>NN</TableCell>
                <TableCell align="center" rowSpan={3}>
                  AGENT NMBR
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  TTL TKT RPRTED NMBR
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  FARE AMOUNTS (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  FARE AMOUNTS (USD)
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  TAXES
                </TableCell>
                <TableCell align="center" colSpan={6}>
                  FORMS OF PAYMENTS
                </TableCell>

                <TableCell align="center" rowSpan={3}>
                  TOTAL AMOUNTS PAID
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  COMMISSIONS ASSESS. AMOUNTS
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  NOTES
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" rowSpan={2}>
                  CASH (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  CHEQUE (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  INVOICE (BGL)
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  CREDIT CARD
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  {this.state.commissions[0]}
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  {this.state.commissions[1]}
                </TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">NMBRS</TableCell>

                <TableCell align="center">USD</TableCell>
                <TableCell align="center">BGL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => {
                return (
                  <TableRow key={row}>
                    <TableCell></TableCell>
                    <TableCell>{row.agent}</TableCell>
                    <TableCell>{row.baseBGL}</TableCell>
                    <TableCell>{row.baseUSD}</TableCell>
                    <TableCell>{row.taxes}</TableCell>
                    <TableCell>{row.cash}</TableCell>
                    <TableCell>{row.cheque}</TableCell>
                    <TableCell>{row.invoice}</TableCell>
                    <TableCell>{row.nmbr}</TableCell>
                    <TableCell>{row.usd}</TableCell>
                    <TableCell>{row.bgl}</TableCell>
                    <TableCell>{row.paid}</TableCell>
                    <TableCell>{row.c1}</TableCell>
                    <TableCell>{row.c2}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={2}>
                  TTLS {this.state.totals.nTickets}
                </TableCell>
                <TableCell>{this.state.totals.ttls}</TableCell>
                <TableCell>{this.state.totals.baseBGL}</TableCell>
                <TableCell>{this.state.totals.baseUSD}</TableCell>
                <TableCell>{this.state.totals.taxes}</TableCell>
                <TableCell>{this.state.totals.cash}</TableCell>
                <TableCell>{this.state.totals.cheque}</TableCell>
                <TableCell>{this.state.totals.invoice}</TableCell>
                <TableCell>{this.state.totals.nmbr}</TableCell>
                <TableCell>{this.state.totals.usd}</TableCell>
                <TableCell>{this.state.totals.bgl}</TableCell>
                <TableCell>{this.state.totals.paid}</TableCell>
                <TableCell>{this.state.totals.c1}</TableCell>
                <TableCell>{this.state.totals.c2}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={9}></TableCell>
                <TableCell colSpan={4}>TOTAL COMMISSION AMOUNT</TableCell>
                <TableCell>{this.state.totals.totalC1}</TableCell>
                <TableCell>{this.state.totals.totalC2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={9}></TableCell>
                <TableCell colSpan={4}>NET AMOUNTS FOR AGENT'S DEBIT</TableCell>
                <TableCell>{this.state.totals.net1}</TableCell>
                <TableCell>{this.state.totals.net2}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(DomesticGlobal);
