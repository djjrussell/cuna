import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./../App.css";
import Failure from "./Failure";
import Main from "./Main";
import Success from "./Success";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route exact={true} path="/success">
            <Success />
          </Route>
          <Route exact={true} path="/failure">
            <Failure />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
