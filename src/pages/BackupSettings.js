import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { InputAdornment, ButtonGroup } from "@material-ui/core";

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
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2)
  }
});

class BackupSettings extends Component {
  state = {
    days: 7
  };

  onChangeDay = e => {
    this.setState({
      days: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const backup = {
      days: this.state.days
    };
    console.log(backup);
    window.location = "/";
  };
  onRestore = e => {
    console.log("restore");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br />
            <h2>Backup Settings</h2>
            <form
              noValidate
              autoComplete="off"
              className="InputForm"
              onSubmit={this.onSubmit}
            >
              <div>
                <label className={classes.label}>Timer :</label>
                <TextField
                  required
                  id="outlined"
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">days</InputAdornment>
                    )
                  }}
                  defaultValue={this.state.days}
                  variant="outlined"
                  onChange={this.onChangeDay}
                />
              </div>
              <ButtonGroup className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  className="btn btn-primary"
                  onClick={this.onRestore}
                >
                  Restore System
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  color="default"
                  className="btn btn-primary"
                >
                  Save changes
                </Button>
              </ButtonGroup>
              <br />
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(BackupSettings);
