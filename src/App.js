import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import PaymentTest from './pages/PaymentTest'


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/payment" component={PaymentTest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
