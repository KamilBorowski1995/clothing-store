import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";
import ShopItemListPage from "pages/ShopItemListPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:type" component={ShopItemListPage} />
        <Route exact path="/shop/:type/:category" component={ErrorPage} />
        <Route exact path="/shop/:type/:category/:id" component={ErrorPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Do zrobienia
//
// 1. Slider - dodać bar postępu i linki
