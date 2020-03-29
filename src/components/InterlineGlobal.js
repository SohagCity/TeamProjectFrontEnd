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
class InterlineGlobal extends Component {
  state = {
    agent: "",
    date: "",
    data: [
      {
        advisor: "",
        doc: "",
        fare: "",
        lz: "",
        others: "",
        amount: "",
        docs: "",
        fcpns: "",
        prorate1: "",
        prorate2: "",
        otherDocs: "",
        otherFcpns: "",
        otherProrate1: "",
        otherProrate2: "",
        cash: "",
        nmbr: "",
        usd: "",
        bgl: "",
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
      ttls: 0,
      doc: "",
      fare: "",
      lz: "",
      others: "",
      amount: "",
      cash: "",
      paid: "",
      //commissions
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      nonAssessed: "",
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
    rate: 15.0,
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
                  INDIVIDUAL SALES REPORT (INTERLINE USD RATE ={" "}
                  {this.state.rate}){"\n"}
                  {this.state.advisor.name} {this.state.advisor.id}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>NN</TableCell>
                <TableCell align="center" colSpan={6}>
                  AIR VIA DOCUMENTS
                </TableCell>
                <TableCell align="center" colSpan={8}>
                  ISSUED IN EXCHANGE FOR DOCUMENTS OF:
                </TableCell>
                <TableCell align="center" colSpan={5}>
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
                  ADVISOR NUMBER
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  DOC NMBRS ACPNS
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  FARE AMOUNT
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  TAXES
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  TOTAL DOCUMENT'S AMOUNT
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  AIR VIA
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  OTHER AIRLINES
                </TableCell>
                <TableCell align="center" rowSpan={2}>
                  CASH
                </TableCell>
                <TableCell align="center" colSpan={3}>
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
                <TableCell align="center">LZ</TableCell>
                <TableCell align="center">OTHS</TableCell>
                <TableCell align="center">DOCS.</TableCell>
                <TableCell align="center">FCPNS</TableCell>
                <TableCell align="center" colSpan={2}>
                  PRORATE AMNTS
                </TableCell>
                <TableCell align="center">DOCS.</TableCell>
                <TableCell align="center">FCPNS</TableCell>
                <TableCell align="center" colSpan={2}>
                  PRORATE AMNTS
                </TableCell>
                <TableCell align="center">NMBR</TableCell>
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
                    <TableCell>{row.advisor}</TableCell>
                    <TableCell>{row.doc}</TableCell>
                    <TableCell>{row.fare}</TableCell>
                    <TableCell>{row.lz}</TableCell>
                    <TableCell>{row.others}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.docs}</TableCell>
                    <TableCell>{row.fcpns}</TableCell>
                    <TableCell>{row.prorate1}</TableCell>
                    <TableCell>{row.prorate2}</TableCell>
                    <TableCell>{row.otherDocs}</TableCell>
                    <TableCell>{row.otherFcpns}</TableCell>
                    <TableCell>{row.otherProrate1}</TableCell>
                    <TableCell>{row.otherProrate2}</TableCell>
                    <TableCell>{row.cash}</TableCell>
                    <TableCell>{row.nmbr}</TableCell>
                    <TableCell>{row.usd}</TableCell>
                    <TableCell>{row.bgl}</TableCell>
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
                  TTLS: {this.state.totals.nTickets}
                </TableCell>
                <TableCell>{this.state.totals.doc}</TableCell>
                <TableCell>{this.state.totals.fare}</TableCell>
                <TableCell>{this.state.totals.lz}</TableCell>
                <TableCell>{this.state.totals.others}</TableCell>
                <TableCell>{this.state.totals.amount}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{this.state.totals.cash}</TableCell>
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
                <TableCell colSpan={15}></TableCell>
                <TableCell colSpan={5}>TOTAL COMMISSION AMOUNT</TableCell>
                <TableCell>{this.state.totals.totalC1}</TableCell>
                <TableCell>{this.state.totals.totalC2}</TableCell>
                <TableCell>{this.state.totals.totalC3}</TableCell>
                <TableCell>{this.state.totals.totalC4}</TableCell>
                <TableCell>{this.state.totals.totalC5}</TableCell>
                <TableCell>{this.state.totals.totalC6}</TableCell>
                <TableCell align="center">* * *</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={15}></TableCell>
                <TableCell colSpan={5}>NET AMOUNTS FOR AGENT'S DEBIT</TableCell>
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

export default withStyles(useStyles, { withTheme: true })(InterlineGlobal);
