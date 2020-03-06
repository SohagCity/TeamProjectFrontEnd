import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PaymentTest from "./pages/PaymentTest";
import CreateUser from "./pages/CreateUser";
import CreateBlank from "./pages/CreateBlank";
import AssignBlank from "./pages/AssignBlank";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/payment" component={PaymentTest} />
          <Route exact path="/createUser" component={CreateUser} />
          <Route exact path="/createBlank" component={CreateBlank} />
          <Route exact path="/assignBlank" component={AssignBlank} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
