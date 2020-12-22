import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={() => <p>Błąd strony</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
