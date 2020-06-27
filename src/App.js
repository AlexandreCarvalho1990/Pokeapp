import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import { Container } from 'react-bootstrap';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
