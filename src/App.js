import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div>INDEX</div>
            </Route>
            <Route path="/home">
              <div>HOME</div>
            </Route>
            <Route path="*">
              <div>404</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
