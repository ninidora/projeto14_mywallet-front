import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';

// import context from ...

import './assets/styles/reset.css';
import './assets/styles/index.css';

import SignIn from './00_SignIn/SignIn.js';
//import 'page01' from ...

export default function App() {
    
  return (
    <BrowserRouter>
      <Switch>
        {/* <Context.Provider value={{ var, func}} > */}
          <Route exact path="/">
            <SignIn />
          </Route>

    
        {/* </Context.Provider> */}
      </Switch>
    </BrowserRouter>
  );
}
