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
import CanDo from './Components/Home/CanDo/CanDo';
import Experience from './Components/Home/Experience/Experience';

function App() {
  return (
    <Router>
     
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
            
          </Route>
          <Route path="/cando">
            <CanDo></CanDo>
            
          </Route>
          <Route path="/resume">
            <Experience></Experience>
            
          </Route>

        </Switch>
      
    </Router>
  );
}

export default App;
