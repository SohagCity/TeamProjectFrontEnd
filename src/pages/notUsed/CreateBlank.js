import React, { Component } from "react";
import "../../App.scss";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
    margin: theme.spacing(1)
  },
  advisor: {
    margin: theme.spacing(1),
    width: 390
  },
  button: {
    margin: theme.spacing(2),
    width: 390
  }
});

class CreateBlank extends Component {
  state = {
    id: "",
    blankId: "",
    blankTypes: ["444", "440", "420", "201", "101", "151", "152"],
    blankType: "444",
    advisors: ["None", "Advisor1", "Advisor2", "Advisor3"], //TODO: get from database
    advisor: "None"
  };

  onChangeBlankId = e => {
    this.setState({
      blankId: e.target.value,
      id: this.state.blankType + this.state.blankId
    });
  };
  onChangeAdvisor = e => {
    this.setState({
      advisor: e.target.value
    });
  };
  onChangeBlankType = e => {
    this.setState({
      blankType: e.target.value,
      id: this.state.blankType + this.state.blankId
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let advisor = this.state.advisor === "None" ? "" : this.state.advisor;

    const blank = {
      id: this.state.id,
      advisor: advisor
    };
    console.log(blank);
    window.location = "/CreateBlank"; //TODO
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Add New Blank</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <label className={classes.label}>Blank Id:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>BlankType</InputLabel>
                <Select
                  label="BlankType"
                  id="BlankTypeSelect"
                  value={this.state.blankType}
                  onChange={this.onChangeBlankType}
                >
                  {this.state.blankTypes.map(function(blankType) {
                    return (
                      <MenuItem key={blankType} value={blankType}>
                        {blankType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                required
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                inputProps={{ minLength: 11, maxLength: 11 }} //TODO: find right size
                id="outlined"
                defaultValue=""
                variant="outlined"
                onChange={this.onChangeBlankId}
              />
            </div>
            <div>
              <label className={classes.label}>Assign to:</label>
              <FormControl variant="outlined" className={classes.advisor}>
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
                Create Blank
              </Button>
            </Box>
            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(CreateBlank);
