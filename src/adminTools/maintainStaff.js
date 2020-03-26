import React from 'react'
import '../App.scss'
import axios from 'axios'
import APIURL from '../misc/backend.js'

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from '@material-ui/core/FormControl';

// TODO: Add form validation, so there's no way to submit without required fields
// TODO: Whole component due to be changed from a dialog to React-UI Paper

class MaintainStaff extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      allUsers: [],
      open: false,
      newEmployee: {
        name: '',
        surname: '',
        role: '',
        username: '',
        password: ''
      }
     }
  }

  // Post the entered user details to backend
  formSubmit = () => {
    axios.post(`${APIURL}/auth/register?secret_token=${this.props.token}`, {
      name: this.state.newEmployee.name,
      surname: this.state.newEmployee.surname,
      role: this.state.newEmployee.role,
      username: this.state.newEmployee.username,
      password: this.state.newEmployee.password
    })
      .then(response => {
        console.log(response)
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      });
  };

  // Updating user details
  handleInput = event => {
    this.state.newEmployee[event.target.name] = event.target.value
    this.setState({ newEmployee: this.state.newEmployee});
  };

  // Dialog open and close
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <div>
        <h1>Staff management:</h1>
        <Button color="blue" onClick={this.handleOpen}>
          Register Users
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register Employees</DialogTitle>
          <DialogContent>
            <TextField
              required
              variant="standard"
              value={this.state.newEmployee.name}
              onChange={this.handleInput}
              name="name"
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
            />
            <TextField
              required
              variant="standard"
              value={this.state.newEmployee.surname}
              onChange={this.handleInput}
              name="surname"
              margin="dense"
              id="surname"
              label="Surname"
              fullWidth
            />
            <FormControl required style={{width: "550px"}}>
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select 
              name='role'
              value={this.state.newEmployee.role}
              onChange={this.handleInput}
              variant='standard'
              margin="dense"
              id="role"
              label="Role"
              fullWidth     
            >
              <MenuItem value='Admin'>Admin</MenuItem>
              <MenuItem value='Manager'>Office Manager</MenuItem>   
              <MenuItem value='Advisor'>Sales Advisor</MenuItem>
            </Select>
            </FormControl>
            <TextField
              required
              variant="standard"
              value={this.state.newEmployee.username}
              onChange={this.handleInput}
              name="username"
              margin="dense"
              id="username"
              label="Username"
              fullWidth
            />
            <TextField
              required
              variant="standard"
              value={this.state.newEmployee.password}
              onChange={this.handleInput}
              name="password"
              margin="dense"
              id="password"
              label="Password"
              fullWidth
            />
          <DialogActions>
            <Button onClick={this.formSubmit}>Register</Button>
          </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default MaintainStaff
