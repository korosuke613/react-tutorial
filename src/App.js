import React from "react";
import logo from './logo.svg';
import { Travel } from './Travel'
import { Grid, AppBar } from '@material-ui/core'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar>
        <h1>こにしのホムペ</h1>
      </AppBar>
      <Grid container>
        <Grid item xs={3} className="App-body">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/travel">Travel</Link>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={9} className="App-body">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/travel">
              <Travel />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>I'm Futa HIRAKOBA!</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
