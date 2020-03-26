import React from 'react'
import '../App.scss'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import APIURL from '../misc/backend.js'

class MaintainStaff extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      allUsers: [],
      newEmployee: {
        name: '',
        surname: '',
        role: '',
        username: '',
        password: ''
      }
     }
  }


  formSubmit = () => {
    axios.post(`${APIURL}/auth/register?secret_token=${this.props.token}`, {
      name: this.newEmployee.name,
      surname: this.newEmployee.surname,
      role: this.newEmployee.role,
      username: this.newEmployee.username,
      password: this.newEmployee.password
    })
      .then(response => {
        /////////////////////
      })
      .catch(error => {
        console.log(error)
      });
  };


  render () {
    return (
      <div>
        <h1>Staff management:</h1>
      </div>
    )
  }
}

export default MaintainStaff
