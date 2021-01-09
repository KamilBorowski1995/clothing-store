import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";
import ShopItemListPage from "pages/ShopItemListPage";
import ItemPage from "pages/ItemPage";
import ApiWorker from "pages/ApiWorker";
import AddItemPage from "pages/AddItemPage";
import { localstorageFunction } from "function/localstorage";

function App() {
  useEffect(() => {
    const localBasket = localStorage.getItem("basket");
    if (!localBasket) {
      localstorageFunction.set("basket", []);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:type" component={ShopItemListPage} />
        <Route exact path="/shop/:type/:id" component={ItemPage} />

        <Route exact path="/api/worker" component={ApiWorker} />
        <Route exact path="/api/worker/additem" component={AddItemPage} />
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
