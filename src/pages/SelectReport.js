import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Box, TextField, InputLabel } from "@material-ui/core";
import PaymentForm from "../components/PaymentForm";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 185
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  currency: {
    margin: theme.spacing(1),
    minWidth: 100
  }
});

class SelectReport extends Component {
  state = {
    report: "Interline",
    type: "Domestic",
    date: ""
  };
  onChangeReport = e => {
    this.setState({ report: e.target.value });
  };
  onChangeType = e => {
    this.setState({ type: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    //go to page
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Select Report</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Report</InputLabel>
                <Select
                  id="report"
                  label="Report"
                  value={this.state.report}
                  onChange={this.onChangeReport}
                >
                  <MenuItem value={"Interline"}>Interline</MenuItem>
                  <MenuItem value={"Domestic"}>Domestic</MenuItem>
                  <MenuItem value={"Turnover"}>Turnover</MenuItem>
                </Select>
              </FormControl>

              {this.state.report != "Turnover" && (
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Type</InputLabel>
                  <Select
                    id="Type"
                    label="Type"
                    value={this.state.type}
                    onChange={this.onChangeType}
                  >
                    <MenuItem value={"Individual"}>Interline</MenuItem>
                    <MenuItem value={"Global"}>Domestic</MenuItem>
                  </Select>
                </FormControl>
              )}
              <TextField
                required
                type="date"
                className={classes.formControl}
                id="date"
                defaultValue={this.state.date}
                variant="outlined"
              ></TextField>
              <Box m={1}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="btn btn-primary"
                >
                  SHOW
                </Button>
              </Box>
            </div>
            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(SelectReport);
