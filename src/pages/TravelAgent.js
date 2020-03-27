import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
});

class TravelAgent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Agent",
      address1: "113 Barking Road", //Address will have multiple lines, in the db can be separated by ","
      address2: "East ham",
      address3: "London",
      address4: "E6",
      contactNumber: "074040404",
      errors: {
        name: ""
      }
    };
  }
  componentDidMount() {
    let dbData = "112 road, something, city, portcode"; //Axios

    var address = dbData.split(", ");
    this.setState({
      address1: address[0],
      address2: address[1],
      address3: address[2],
      address4: address[3]
    });
  }
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeAddress1 = e => {
    this.setState({
      address1: e.target.value
    });
  };
  onChangeAddress2 = e => {
    this.setState({
      address2: e.target.value
    });
  };
  onChangeAddress3 = e => {
    this.setState({
      address3: e.target.value
    });
  };
  onChangeAddress4 = e => {
    this.setState({
      address4: e.target.value
    });
  };
  onChangeContactNumber = e => {
    this.setState({
      contactNumber: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let errors = this.state.errors;
    errors.name = this.state.name === "" ? "Please insert a name " : "";
    this.setState({ errors });

    //putting address backtogether
    let address =
      this.state.address1 +
      ", " +
      this.state.address2 +
      ", " +
      this.state.address3 +
      ", " +
      this.state.address4;
    if (this.validateForm(this.state.errors)) {
      const agent = {
        name: this.state.name,
        address: address,
        contactNumber: this.state.contactNumber
      };
      console.log(agent);
    }
    //window.location = "/users";
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br />
            <h2>Travel Agent</h2>
            <form
              noValidate
              autoComplete="off"
              className="InputForm"
              onSubmit={this.onSubmit}
            >
              <div>
                <TextField
                  required
                  id="name"
                  label="Name"
                  defaultValue={this.state.name}
                  variant="outlined"
                  onChange={this.onChangeName}
                />
              </div>
              {this.state.errors.name.length > 0 && (
                <span className="error">{this.state.errors.name}</span>
              )}
              <div>
                <TextField
                  id="address1"
                  label="Address Line 1"
                  defaultValue={this.state.address1}
                  variant="outlined"
                  onChange={this.onChangeAddress1}
                />
              </div>
              <div>
                <TextField
                  id="address2"
                  label="Address Line 2"
                  defaultValue={this.state.address2}
                  variant="outlined"
                  onChange={this.onChangeAddress2}
                />
              </div>
              <div>
                <TextField
                  id="address3"
                  label="Address Line 3"
                  defaultValue={this.state.address3}
                  variant="outlined"
                  onChange={this.onChangeAddress3}
                />
              </div>
              <div>
                <TextField
                  id="address4"
                  label="Address Line 4"
                  defaultValue={this.state.address4}
                  variant="outlined"
                  onChange={this.onChangeAddress4}
                />
              </div>
              <div>
                <TextField
                  id="contanctNumber"
                  label="Contanct Number"
                  defaultValue={this.state.contactNumber}
                  variant="outlined"
                  onChange={this.onChangeContactNumber}
                />
              </div>
              <Box m={1}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="btn btn-primary"
                >
                  Edit Details
                </Button>
              </Box>
              <br />
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(TravelAgent);
