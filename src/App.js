import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PaymentTest from "./pages/PaymentTest";
import CreateUser from "./pages/CreateUser";
import CreateBlank from "./pages/blanks/CreateBlank";
import AssignBlank from "./pages/blanks/AssignBlank";
import ReportSale from "./pages/ReportSale";
import DeleteBlank from "./pages/blanks/DeleteBlank";
import BackupSettings from "./pages/BackupSettings";
import ViewBlanks from "./pages/blanks/ViewBlanks";
import Blanks from "./pages/Blanks";
import Customers from "./pages/Customers";

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
          <Route exact path="/reportsale" component={ReportSale} />
          <Route exact path="/deleteBlank" component={DeleteBlank} />
          <Route exact path="/backupSettings" component={BackupSettings} />
          <Route exact path="/viewBlanks" component={ViewBlanks} />
          <Route exact path="/Blanks" component={Blanks} />
          <Route exact path="/Customers" component={Customers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
