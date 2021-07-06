import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';

function App() {
  return (
    <Router>
     
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/about">
            <About></About>
            
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
