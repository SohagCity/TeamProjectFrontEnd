import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Box } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  },
  label: {
    margin: theme.spacing(2),
    position: "relative",
    top: 30
  },
  formControl: {
    margin: theme.spacing(1),
    width: 250
  },
  button: {
    margin: theme.spacing(2),
    width: 390
  }
});

class AssignBlank extends Component {
  state = {
    blanks: ["44400000000", "4441111111"], //TODO: get from database
    blank: "44400000000",
    advisors: ["Advisor1", "Advisor2", "Advisor3"], //TODO: get from database
    advisor: "Advisor1"
  };

  onChangeAdvisor = e => {
    this.setState({
      advisor: e.target.value
    });
  };
  onChangeBlank = e => {
    this.setState({
      blank: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const assignedBlank = {
      blank: this.state.blank,
      advisor: this.state.advisor
    };
    console.log(assignedBlank);
    window.location = "/AssignBlank"; //TODO
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Assign Blank</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <label className={classes.label}>Blank:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="BlankSelect"
                  value={this.state.blank}
                  onChange={this.onChangeBlank}
                >
                  {this.state.blanks.map(function(blank) {
                    return (
                      <MenuItem key={blank} value={blank}>
                        {blank}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>

            <div>
              <label className={classes.label}>Assign to:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="AdvisorSelect"
                  value={this.state.advisor}
                  onChange={this.onChangeAdvisor}
                >
                  {this.state.advisors.map(function(advisor) {
                    return (
                      <MenuItem key={advisor} value={advisor}>
                        {advisor}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Box m={1}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="btn btn-primary"
              >
                Assign Blank
              </Button>
            </Box>
            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(AssignBlank);
