import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      background: "#454952",
      color: "white",
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(70),
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
  input: {
    color: "white"
  }
}));

function Login() {
  const classes = useStyles();
  return (
    <div className="Login">
      <div className={classes.root}>
        <Paper elevation={3}>
          <h2>Login</h2>
          <form noValidate autoComplete="off" className="classes.">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue=""
              variant="outlined"
              InputProps={{ className: classes.input }}
              color="secondary"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              InputProps={{ className: classes.input }}
              color="secondary"
            />
          </form>
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
