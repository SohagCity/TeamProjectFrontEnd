import React from 'react';
import Axios from 'axios'
import APIURL from '../misc/backend'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';


class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentuser: null,
      username: '',
      password: '',
      open: false,
      loginFailed: false,
      sideMenuOpen: false
    }
  }

  // Login dialog open and close actions
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  // Updating username and password from within the form
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // Side menu open and close
  openMenu = () => {
    this.setState({ sideMenuOpen: true })
  }
  closeMenu = () => {
    this.setState({ sideMenuOpen: false })
  }

  // User Login
  formSubmit = () => {
    Axios.post(`${APIURL}/login`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      window.location.reload()
    })
    .catch(error => {
      this.setState({ loginFailed: true })
    })
  }

  render() {
    const { classes } = this.props;
      return (
        <div>
          <AppBar position="static" style={{ background: '#212121' }}>
            <Toolbar>
              <IconButton onClick={this.openMenu} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                AirVia
              </Typography>
              <Button color="inherit" style={{ position: 'absolute', right: '1vw' }} onClick={this.handleOpen}>Login</Button>
              <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Employee Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To access the system, please log in using your login credentials.
                    To register, or reset your password, contact the administrator.
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
                  <Button onClick={this.formSubmit}>Login</Button>
                </DialogActions>
              </Dialog>
            </Toolbar>
          </AppBar>


          <Drawer open={this.state.sideMenuOpen} onClose={this.closeMenu}>
            <List style={{width: '320px'}}>
            </List>
            <Box fontSize="fontSize" textAlign="center" >
              <p>Designed in London by Team 6ix</p>
              <p>Developed by <a href="https://piotr-rutkowski.com">Piotr Rutkowski</a> and <a href="https://github.com/SohagCity">Sohag Miah</a></p>
            </Box>
          </Drawer>
        </div>
      );
    }
  }

export default NavBar
