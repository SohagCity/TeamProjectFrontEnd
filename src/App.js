import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    <Router>
        <div>
        <NavBar />
              <Route exact={true} path='/' render={() => (
                <div className='App'>
                  <Home />
                </div>
              )}/>
              <Route exact={true} path='/login' render={() => (
                <div className='App'>
                  <Login />
                </div>
              )}/>
              <Route exact={true} path='/register' render={() => (
                  <div className='App'>
                    <Register />
                  </div>
                )}/>
          </div>
      </Router>
  );
}

export default App;
