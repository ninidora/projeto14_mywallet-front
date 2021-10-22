import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';

// import context from ...

import './assets/styles/reset.css';
import './assets/styles/index.css';

import SignIn from './00_SignIn/SignIn.js';
import SignUp from './01_SignUp/SignUp.js';
import Home from './02_Home/Home.js';

export default function App() {
    
  return (
    <BrowserRouter>
      <Switch>
        {/* <Context.Provider value={{ var, func}} > */}
          <Route exact path="/">
            <SignIn />
          </Route>

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>


    
        {/* </Context.Provider> */}
      </Switch>
    </BrowserRouter>
  );
}
