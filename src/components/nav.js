import React, { Component } from 'react';
import Automate from './Automate'
import Camera from './Camera'
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
        <ul>
          <li>
            <Link to="/automate">Automate</Link>
          </li>
          <li>
            <Link to="/camera">Camera</Link>
          </li>
          <li>
            <Link to="/logout">Sign Out</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/automate">
              <Automate />
            </Route>
            <Route path="/camera">
              <Camera />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Navbar;