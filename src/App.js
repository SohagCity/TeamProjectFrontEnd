import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PaymentTest from "./pages/PaymentTest";
import CreateUser from "./pages/CreateUser";
import CreateBlank from "./pages/notUsed/CreateBlank";
import AssignBlank from "./pages/notUsed/AssignBlank";
import RecordSale from "./pages/RecordSale";
import DeleteBlank from "./pages/notUsed/DeleteBlank";
import BackupSettings from "./pages/BackupSettings";
import ViewBlanks from "./pages/notUsed/ViewBlanks";
import Blanks from "./pages/Blanks";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Tickets from "./pages/Tickets";

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
          <Route exact path="/recordSale" component={RecordSale} />
          <Route exact path="/deleteBlank" component={DeleteBlank} />
          <Route exact path="/backupSettings" component={BackupSettings} />
          <Route exact path="/viewBlanks" component={ViewBlanks} />
          <Route exact path="/blanks" component={Blanks} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/editUser/:id" component={EditUser} />
          <Route exact path="/tickets" component={Tickets} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
