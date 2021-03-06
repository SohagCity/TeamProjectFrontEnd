import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";

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

class AssignRange extends Component {
  state = {
    from: "",
    to: "",
    advisor: "",
    errors: {
      from: "",
      to: ""
    }
  };
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  onChangeTo = e => {
    this.setState({
      to: e.target.value
    });
  };
  onChangeFrom = e => {
    this.setState({
      from: e.target.value
    });
  };
  onChangeAdvisor = e => {
    this.setState({
      advisor: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    //check if range is valid and doesnt overlap with existing ones

    if (this.validateForm(this.state.errors)) {
      let to = parseInt(this.state.from);
      let from = parseInt(this.state.to);
      for (; from < to; from++) {
        const blanks = {
          id: from,
          advisor: this.state.advisor
        };
        console.log(blanks);
      }
    }
    //window.location = "/AssignRange";
  };

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Assign to Advisor</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <TextField
                required
                className={classes.amount}
                label="From"
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                inputProps={{
                  minLength: 9,
                  maxLength: 11
                }}
                id="outlined"
                defaultValue={this.state.from}
                variant="outlined"
                onChange={this.onChangeFrom}
              />
              <TextField
                required
                className={classes.amount}
                label="To"
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                inputProps={{
                  minLength: 9,
                  maxLength: 11
                }} //TODO: currency input
                id="to"
                defaultValue={this.state.to}
                variant="outlined"
                onChange={this.onChangeTo}
              />
            </div>
            {errors.to.length > 0 && <span className="error">{errors.to}</span>}
            {errors.from.length > 0 && (
              <span className="error">{errors.from}</span>
            )}
            <TextField
              required
              className={classes.amount}
              label="Adivsor"
              onInput={e => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              inputProps={{
                minLength: 9,
                maxLength: 11
              }} //TODO: currency input
              id="to"
              defaultValue={this.state.to}
              variant="outlined"
              onChange={this.onChangeTo}
            />
            <Box m={1}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="btn btn-primary"
              >
                Record
              </Button>
            </Box>

            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(AssignRange);
