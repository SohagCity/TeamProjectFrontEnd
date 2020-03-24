import React from "react";
import axios from 'axios';
import APIURL from "./misc/backend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import authenticated from "./misc/userAuth";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import PaymentTest from "./pages/PaymentTest";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usertoken: null,
      userLoggedIn: false,
      userID: null,
      userRole: null
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
        this.state.userID = res.data.user.username
        this.state.userRole = res.data.user.role
        console.log(res)
      });
  }

  render () {
    return (
      <Router>
      {/* set the userLoggedIn inside NavBar component to the current state here*/}
      <NavBar userLoggedIn={this.state.userLoggedIn}/>
      <div className="App">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/payment" component={PaymentTest} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
