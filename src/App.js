import React from 'react';
import './App.scss';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Help from './Components/Help/Help';

function App() {
  return (
    <div >
      <Router>
              <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/help">
             <Help></Help>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
