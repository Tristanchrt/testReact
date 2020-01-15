import React, { useState } from "react";
import AppFormClient from "./ListClients/AppFormClient";
import Shop from './Shop';
import Connexion from './Connexion'
import Menu from './Menu'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const AppRouter = () => {
    return (
      <Router>
        <div className="AppRouter">
            <Menu/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Shop" component={Shop}/>
                <Route path="/Connexion" component={Connexion}/>
                <Route path="/Client" component={AppFormClient}/>
              </Switch>
        </div>
      </Router>
    );
};




export default AppRouter;
