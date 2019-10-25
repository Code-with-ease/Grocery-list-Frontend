import React, { Component } from 'react';
import Automate from './Automate'
import Camera from './Camera'
import Login from './Login'
import Logout from './Logout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul class="d-flex justify-content-around">
        

        <li class="p-2">
            <Link to="/Grocery-list-Frontend/login">Login</Link>
          </li>
          <li class="p-2">
            <Link to="/Grocery-list-Frontend/automate">Automate</Link>
          </li>
          <li class="p-2">
            <Link to="/Grocery-list-Frontend/camera">Camera</Link>
          </li>
          <li class="p-2">
            <Link to="/Grocery-list-Frontend/logout">Sign Out</Link>
            </li>
        </ul>

        <Switch>
        <Route path="/Grocery-list-Frontend/login">
              <Login />
            </Route>
            <Route path="/Grocery-list-Frontend/automate">
              <Automate />
            </Route>
            <Route path="/Grocery-list-Frontend/camera">
              <Camera />
            </Route>
            <Route path="/Grocery-list-Frontend/logout">
              <Logout />
            </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Navbar;