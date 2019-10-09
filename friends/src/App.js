import React from "react";
import { Route } from "react-router";
import "./App.css";
//import Public from "./components/Public";
import PrivateRoute from "./components/PrivateRoute";
import Public from './components/Public';
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>
        Welcome to My Friends List
      </h1>
      <ul>
        <li>
          <Link to="/public">Home Page</Link>
        </li>
        <li>
          <Link to="/protected">Friends</Link>
        </li>
      <li>
        <Link to ="/login">Login</Link>
        </li>
      </ul>
      <Route exact path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={FriendsList} />
    </div>
  );
}

export default App;
