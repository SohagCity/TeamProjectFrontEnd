import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
