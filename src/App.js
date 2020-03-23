import React from "react";
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
    }

    // if there is a token currently in local localStorage
    // get it and set state and props for other components to access
    const JWT = localStorage.getItem('usertoken')
    const parsed = JSON.parse(JWT)

    if (authenticated()) {
      this.state.userLoggedIn = true
      this.state.usertoken = parsed.usertoken
    }
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
