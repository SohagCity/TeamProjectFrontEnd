import React from "react";
import axios from 'axios';
import APIURL from "./misc/backend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import authenticated from "./misc/userAuth";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usertoken: null,
      userLoggedIn: false,
      userID: null,
      userRole: null,
      staffName: null
    }

    // if there is a token currently in local localStorage
    // get it and set state and props for other components to access
    let webtoken = localStorage.getItem('usertoken')
    let parsedToken = JSON.parse(webtoken)
    if (authenticated()) {
      this.state.userLoggedIn = true
      this.state.usertoken = parsedToken.token
    }
  }

  // Load the user ID to query
  async componentDidMount() {
    await axios.get(
      `${APIURL}/auth/profileInfo?secret_token=${this.state.usertoken}`)
      .then(res => {
        this.setState({
          userID: res.data.user.username,
          userRole: res.data.user.role,
          staffName: res.data.user.name
        });
      });
  }

  render () {
    return (
      <Router>
      <Switch>
        <Route exact={true} path='/' render={() => (
          <div className="App">
            <NavBar userLoggedIn={this.state.userLoggedIn}
               staffName={this.state.staffName}
               staffRole={this.state.userRole}
             />
            {this.state.userLoggedIn ? <HomePage/> : <LandingPage/> }
          </div>
        )}/>
      </Switch>
    </Router>
    )
  }
}

export default App;
