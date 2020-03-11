import React, { Component } from "react";
import "../App.scss";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
});

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      name: "",
      roles: [{ 1: "Advisor", 2: "OfficeManager", 3: "Admin" }],
      role: ""
    };
  }

  componentWillMount() {
    this.setState({ username: this.props.match.params.id });
  }

  onChangeUserName = e => {
    this.setState({
      username: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeRole = e => {
    this.setState({
      role: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      role: this.state.role
    };
    console.log(user);
    window.location = "/staff"; //TODO
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br />
            <h2>Edit User</h2>
            <form
              noValidate
              autoComplete="off"
              className="InputForm"
              onSubmit={this.onSubmit}
            >
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Username"
                  defaultValue={this.state.username}
                  variant="outlined"
                  onChange={this.onChangeUserName}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined"
                  label="Name"
                  defaultValue={this.state.name}
                  variant="outlined"
                  onChange={this.onChangeName}
                />
              </div>
              <div>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    label="role"
                    id="demo-customized-select"
                    value={this.state.role}
                    onChange={this.onChangeRole}
                  >
                    {this.state.roles.map(function(role) {
                      return (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onChange={this.onChangePassword}
                />
              </div>
              <Box m={1}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="btn btn-primary"
                >
                  Create User
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

export default withStyles(useStyles, { withTheme: true })(EditUser);
