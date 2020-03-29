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
class DomesticIndividual extends Component {
  state = {
    agent: "",
    date: "",
    data: [
      {
        blankId: "",
        baseBGL: "",
        baseUSD: "",
        cash: "",
        cheque: "",
        invoice: "",
        usd: "",
        bgl: "",
        taxes: "",
        paid: "",
        c1: "",
        c2: ""
      }
    ],
    totals: {
      nTickets: 0,
      baseBGL: "",
      baseUSD: "",
      cash: "",
      cheque: "",
      invoice: "",
      usd: "",
      bgl: "",
      taxes: "",
      paid: "",
      c1: "",
      c2: "",
      totalC1: 0,
      totalC2: 0,
      net1: 0,
      net2: 0
    },
    advisor: {
      id: 220,
      name: "Jordan"
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
                  INDIVIDUAL SALES REPORT (DOMESTIC)
                  {this.state.advisor.name} {this.state.advisor.id}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>NN</TableCell>
                <TableCell align="center" colSpan={3}>
                  AIR VIA DOCUMENTS
                </TableCell>
                <TableCell align="center" colSpan={5}>
                  FORMS OF PAYMENTS
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  TAXES
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  TOTAL AMOUNTS PAID
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  COMMISSIONS ASSESS. AMOUNTS
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  NOTES
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  OTHER DETAILS CHQ NMBR, INV. NMBR, CC NMBR SPONSOR, REISS. TKT
                  NMBR
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  NOTES
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" rowSpan={2}>
                  ORIGIANL ISSUED NUMBER
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  FARE AMOUNTS (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  FARE AMOUNTS (USD)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  CASH (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  CHEQUE (BGL)
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  INVOICE (BGL)
                </TableCell>
                <TableCell align="center" colSpan={2}>
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
                <TableCell align="center">USD</TableCell>
                <TableCell align="center">BGL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => {
                return (
                  <TableRow key={row}>
                    <TableCell></TableCell>
                    <TableCell>{row.blankId}</TableCell>
                    <TableCell>{row.baseBGL}</TableCell>
                    <TableCell>{row.baseUSD}</TableCell>
                    <TableCell>{row.cash}</TableCell>
                    <TableCell>{row.cheque}</TableCell>
                    <TableCell>{row.invoice}</TableCell>
                    <TableCell>{row.usd}</TableCell>
                    <TableCell>{row.bgl}</TableCell>
                    <TableCell>{row.taxes}</TableCell>
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
                  NUMBER OF TKTS {this.state.totals.nTickets}
                </TableCell>
                <TableCell>{this.state.totals.baseBGL}</TableCell>
                <TableCell>{this.state.totals.baseUSD}</TableCell>
                <TableCell>{this.state.totals.cash}</TableCell>
                <TableCell>{this.state.totals.cheque}</TableCell>
                <TableCell>{this.state.totals.invoice}</TableCell>
                <TableCell>{this.state.totals.usd}</TableCell>
                <TableCell>{this.state.totals.bgl}</TableCell>
                <TableCell>{this.state.totals.taxes}</TableCell>
                <TableCell>{this.state.totals.paid}</TableCell>
                <TableCell>{this.state.totals.c1}</TableCell>
                <TableCell>{this.state.totals.c2}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={7}></TableCell>
                <TableCell colSpan={4}>TOTAL COMMISSION AMOUNT</TableCell>
                <TableCell>{this.state.totals.totalC1}</TableCell>
                <TableCell>{this.state.totals.totalC2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={7}></TableCell>
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

export default withStyles(useStyles, { withTheme: true })(DomesticIndividual);
