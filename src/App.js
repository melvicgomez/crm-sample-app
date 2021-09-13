import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebFont from 'webfontloader';

// Page Containers
import DashboardPageContainer from './Containers/DashboardPageContainer';
import HomePageContainer from './Containers/HomePageContainer';
import PageNotFoundContainer from './Containers/PageNotFoundContainer';

import './App.css';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Work Sans:400,500,700'],
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePageContainer />
            </Route>
            <Route path="/home">
              <DashboardPageContainer />
            </Route>
            <Route path="*">
              <PageNotFoundContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
