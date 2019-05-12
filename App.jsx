import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


import Login from './views/Login';
import Register from './views/Register';



function App() {
  return (
     <Router>      
         
            <Switch>
              <Redirect from="/" to="/login" exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />

</Switch>
</Router>
   
  );
}

export default App;
