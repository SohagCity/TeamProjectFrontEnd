import React from "react";
import "../App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      background: "#454952",
      color: "white",
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(50),
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: 300
    }
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div className="Login">
      <div className={classes.root}>
        <Paper elevation={3}>
          <br />
          <h2>Employee login</h2>
          <form noValidate autoComplete="off" className="InputForm">
            <TextField
              required
              id="outlined"
              label="Username"
              defaultValue=""
              variant="outlined"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
          </form>
          <Button variant="outlined">Log in</Button>
          <p>
            To recover a password contact the system administrator.
          </p>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
