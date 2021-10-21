import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';

// import context from ...

import './assets/styles/reset.css';
import './assets/styles/index.css';

//import 'page00' from ./Page00.js ...
//import 'page01' from ...

export default function App() {
    
  return (
    <BrowserRouter>
      <Switch>
        {/* <Context.Provider value={{ var, func}} > */}
          <Route exact path="/">
            {/* <Page00 /> */}foi?
          </Route>

    
        {/* </Context.Provider> */}
      </Switch>
    </BrowserRouter>
  );
}
