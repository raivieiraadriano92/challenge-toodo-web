import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoList from "../components/TodoList";

const Routes = () => (
  <Router>
    <Route exact path="/" component={TodoList} />
  </Router>
);

export default Routes;
