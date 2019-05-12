import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


import Login from './views/Login';
import Register from './views/Register';


import Dashboard from './views/Dashboard';
import TransactionHistory from './views/TransactionHistory';
import LoadMoney from './views/LoadMoney';
import SendMoney from './views/SendMoney';



function App() {
  return (
     <Router>      
          <Switch>
              <Redirect from="/" to="/login" exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
             
               <Route path="/dashboard" component={Dashboard} />
              <Route path="/transaction" component={TransactionHistory} />
              <Route path="/loadmoney" component={LoadMoney} />
              <Route path="/sendmoney" component={SendMoney} />

</Switch>
           
</Router>
   
  );
}

export default App;
