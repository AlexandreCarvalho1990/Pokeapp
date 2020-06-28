import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import './App.scss';
function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Fragment>
      <Footer />
    </Router>
  );
}

export default App;
