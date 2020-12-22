import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Do zrobienia
//
// 1. Slider - dodać bar postępu
