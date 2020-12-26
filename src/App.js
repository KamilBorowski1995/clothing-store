import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";
import ShopItemListPage from "pages/ShopItemListPage";
import ItemPage from "pages/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:type" component={ShopItemListPage} />
        <Route exact path="/shop/:type/:id" component={ItemPage} />
        {/* <Route exact path="/shop/:type/:category/:id" component={ErrorPage} /> */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Do zrobienia
//
// 1. Slider - dodać bar postępu i linki
// 2. Backend - naprawa wyszukiwania elementów
