import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import CustomNavbar from './CustomNavbar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import ErrorNotFound from './ErrorNotFound';

function App() {
  return (
    <Router>
      <CustomNavbar />
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
          <Route component={ErrorNotFound} />
        </Switch>
    </Router>
  );
}
export default App;
