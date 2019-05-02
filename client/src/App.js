import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateAlias from './components/CreateAlias'

import { Container } from 'react-bootstrap';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/main" exact component={Messenger} /> */}
        <Route path="/" exact component={CreateAlias} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
