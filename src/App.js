import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PaymentTest from "./pages/PaymentTest";
import CreateUser from "./pages/CreateUser";
import RecordSale from "./pages/RecordSale";
import BackupSettings from "./pages/BackupSettings";
import Blanks from "./pages/Blanks";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Tickets from "./pages/Tickets";
import TravelAgents from "./pages/TravelAgents";
import Currencies from "./pages/Currencies";
import Commissions from "./pages/Commissions";
import Discounts from "./pages/Discounts";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/payment" component={PaymentTest} />
          <Route exact path="/users/add" component={CreateUser} />
          <Route exact path="/recordSale" component={RecordSale} />
          <Route exact path="/backupSettings" component={BackupSettings} />
          <Route exact path="/blanks" component={Blanks} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/tickets" component={Tickets} />
          <Route exact path="/travelAgents" component={TravelAgents} />
          <Route exact path="/currencies" component={Currencies} />
          <Route exact path="/commissions" component={Commissions} />
          <Route exact path="/discounts" component={Discounts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
