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
class InterlineIndividual extends Component {
  state = {
    agent: "",
    date: "",
    data: [
      {
        blankId: "",
        usd: "",
        usdBgl: "",
        bgl: "",
        lz: "",
        oths: "",
        amount: "",
        cd: "",
        doc: "",
        fc: "",
        pror: "",
        cash: "",
        lc: "",
        cc: "",
        cardUSD: "",
        cardBGL: "",
        paid: "",
        //commissions
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        nonAssessed: ""
      }
    ],
    totals: {
      nTickets: 0,
      usd: 0,
      bgl: 0,
      lz: 0,
      oths: 0,
      amount: 0,
      cash: 0,
      paid: 0,
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0,
      c5: 0,
      c6: 0,
      nonAssessed: 0,
      //we could store these separatly
      totalC1: 0,
      totalC2: 0,
      totalC3: 0,
      totalC4: 0,
      totalC5: 0,
      totalC6: 0,
      net1: 0,
      net2: 0,
      net3: 0,
      net4: 0,
      net5: 0,
      net6: 0,
      net7: 0
    },
    commissions: [1, 2, 3, 4, 5, 6],
    advisor: {
      id: 220,
      name: "Jordan"
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
                Sales period: {this.state.date}
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={28}>
                  GLOBAL SALES REPORT (INTERLINE - {this.state.advisor.name}{" "}
                  {this.state.advisor.id}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>NN</TableCell>
                <TableCell align="center" colSpan={7}>
                  AIR VIA DOCUMENTS
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  IN EXCHANGE FOR DOCS OF:
                </TableCell>
                <TableCell align="center" colSpan={6}>
                  FORMS OF PAYMENTS
                </TableCell>
                <TableCell align="center" colSpan={6}>
                  COMMISSIONS
                </TableCell>
                <TableCell align="center" rowSpan={3}>
                  NON ASSESS. AMOUNTS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" rowSpan={2}>
                  ORIGIANL ISSUED NUMBER
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  FARE AMOUNTS
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  TAXES
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  TOTAL DOCUMENT'S AMOUNT
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  AIRLINES
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  CASH
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  CREDIT CARDS
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  TOTAL AMOUNTS PAID
                </TableCell>
                <TableCell align="center" colSpan={6}>
                  ASSESSABLE AMOUNTS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">USD</TableCell>
                <TableCell align="center">USD/BGL</TableCell>
                <TableCell align="center">BGL</TableCell>
                <TableCell align="center">LZ</TableCell>
                <TableCell align="center">OTHS</TableCell>
                <TableCell align="center">CD</TableCell>
                <TableCell align="center">DOC.NBR</TableCell>
                <TableCell align="center">FC</TableCell>
                <TableCell align="center">PROR.AMNT</TableCell>
                <TableCell align="center">LC</TableCell>
                <TableCell align="center">FULL CC NUMBER</TableCell>
                <TableCell align="center">USD</TableCell>
                <TableCell align="center">BGL</TableCell>
                {this.state.commissions.map(c => {
                  return (
                    <TableCell key={c} align="center">
                      c
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => {
                return (
                  <TableRow key={row}>
                    <TableCell></TableCell>
                    <TableCell>{row.blankId}</TableCell>
                    <TableCell>{row.usd}</TableCell>
                    <TableCell>{row.usdBgl}</TableCell>
                    <TableCell>{row.bgl}</TableCell>
                    <TableCell>{row.lz}</TableCell>
                    <TableCell>{row.oths}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.cd}</TableCell>
                    <TableCell>{row.doc}</TableCell>
                    <TableCell>{row.fc}</TableCell>
                    <TableCell>{row.pror}</TableCell>
                    <TableCell>{row.cash}</TableCell>
                    <TableCell>{row.lc}</TableCell>
                    <TableCell>{row.cc}</TableCell>
                    <TableCell>{row.cardUSD}</TableCell>
                    <TableCell>{row.cardBGL}</TableCell>
                    <TableCell>{row.paid}</TableCell>
                    <TableCell>{row.c1}</TableCell>
                    <TableCell>{row.c2}</TableCell>
                    <TableCell>{row.c3}</TableCell>
                    <TableCell>{row.c4}</TableCell>
                    <TableCell>{row.c5}</TableCell>
                    <TableCell>{row.c6}</TableCell>
                    <TableCell>{row.nonAssessed}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={2}>
                  NUMBER OF TKTS {this.state.totals.nTickets}
                </TableCell>
                <TableCell>{this.state.totals.usd}</TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.bgl}</TableCell>
                <TableCell>{this.state.totals.lz}</TableCell>
                <TableCell>{this.state.totals.oths}</TableCell>
                <TableCell>{this.state.totals.amount}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.cash}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.paid}</TableCell>
                <TableCell>{this.state.totals.c1}</TableCell>
                <TableCell>{this.state.totals.c2}</TableCell>
                <TableCell>{this.state.totals.c3}</TableCell>
                <TableCell>{this.state.totals.c4}</TableCell>
                <TableCell>{this.state.totals.c5}</TableCell>
                <TableCell>{this.state.totals.c6}</TableCell>
                <TableCell>{this.state.totals.nonAssessed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={14}></TableCell>
                <TableCell colSpan={4}>TOTAL COMMISSION AMOUNT</TableCell>
                <TableCell>{this.state.totals.totalC1}</TableCell>
                <TableCell>{this.state.totals.totalC2}</TableCell>
                <TableCell>{this.state.totals.totalC3}</TableCell>
                <TableCell>{this.state.totals.totalC4}</TableCell>
                <TableCell>{this.state.totals.totalC5}</TableCell>
                <TableCell>{this.state.totals.totalC6}</TableCell>
                <TableCell align="center">* * *</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={14}></TableCell>
                <TableCell colSpan={4}>NET AMOUNTS FOR AGENT'S DEBIT</TableCell>
                <TableCell>{this.state.totals.net1}</TableCell>
                <TableCell>{this.state.totals.net2}</TableCell>
                <TableCell>{this.state.totals.net3}</TableCell>
                <TableCell>{this.state.totals.net4}</TableCell>
                <TableCell>{this.state.totals.net5}</TableCell>
                <TableCell>{this.state.totals.net6}</TableCell>
                <TableCell>{this.state.totals.net7}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(InterlineIndividual);
