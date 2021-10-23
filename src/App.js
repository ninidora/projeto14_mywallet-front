import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';

import { UserContext } from './services/contexts/UserContext.js';

import './assets/styles/reset.css';
import './assets/styles/index.css';

import SignIn from './00_SignIn/SignIn.js';
import SignUp from './01_SignUp/SignUp.js';
import Home from './02_Home/Home.js';
import NewEntry from './03_NewEntry/NewEntry.js';

export default function App() {
  const [userData, setUserData] = useState({email:"", password:""});
      
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ userData, setUserData}} >
          <Route exact path="/">
            <SignIn />
          </Route>

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/new-entry">
            <NewEntry />
          </Route>   
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
