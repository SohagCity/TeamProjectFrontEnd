import React from "react";
import Axios from "axios";
import APIURL from "../misc/backend";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      open: false,
      loginFailed: false,
      sideMenuOpen: false
    };
  }


  // Login dialog open and close actions
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  // Updating username and password from within the form
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Side menu open and close
  openMenu = () => {
    this.setState({ sideMenuOpen: true });
  };
  closeMenu = () => {
    this.setState({ sideMenuOpen: false });
  };

  // User authentication via the API url
  formSubmit = () => {
    Axios.post(`${APIURL}/auth/login`, {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        // Store the token in local storage, under key 'usertoken'
        localStorage.setItem('usertoken', JSON.stringify(response.data))
        window.location.reload()
        console.log()
      })
      .catch(error => {
        this.setState({ loginFailed: true });
      });
  };

  // Logging out the user by deleting the token from local storage
  userLogout = () => {
    localStorage.removeItem('usertoken')
    window.location.reload()
    console.log()
  }

  // The nav bar along with buttons
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ background: "#212121" }}>
          <Toolbar>
            <IconButton
              onClick={this.openMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">AirVia</Typography>
            {this.props.userLoggedIn &&
              <Typography variant="h6" style={{ position: "absolute", right: "43vw" }}>
                Welcome, {this.props.staffName}
              </Typography>
            }
            {/* userLoggedIn defined in App.js - when true and a token
              is currently stored within local storage, only the log out
              option is available. Otherwise, users can log in
            */}
            {this.props.userLoggedIn
            ? <Button color="inherit" style={{ position: "absolute", right: "1vw" }} onClick={this.userLogout}>
                Sign out
              </Button>
            : <Button color="inherit" style={{ position: "absolute", right: "1vw" }} onClick={this.handleOpen}>
                Sign in
              </Button>}
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Employee Log In</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To access the system, please log in using your login
                  credentials. To register, or reset your password, contact the
                  administrator.
                </DialogContentText>
                <TextField
                  required
                  variant="standard"
                  value={this.state.username}
                  onChange={this.handleInput}
                  name="username"
                  autoFocus
                  margin="dense"
                  id="username"
                  label="Username/number"
                  fullWidth
                />
                <TextField
                  required
                  type="password"
                  variant="standard"
                  value={this.state.password}
                  onChange={this.handleInput}
                  name="password"
                  margin="dense"
                  id="password"
                  label="Password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.formSubmit}>Sign in</Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
        </AppBar>

        {/* Side menu (drawer) */}
        <Drawer open={this.state.sideMenuOpen} onClose={this.closeMenu}>
          <List style={{ width: "320px" }}></List>
          <Box fontSize="fontSize" textAlign="center">
            <p>Designed in London by Team 6ix</p>
            <p>
              Developed by{" "}
              <a href="https://piotr-rutkowski.com">Piotr Rutkowski</a> and{" "}
              <a href="https://github.com/SohagCity">Sohag Miah</a>
            </p>
          </Box>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
