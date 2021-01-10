import { localstorageFunction } from "function/localstorage";
import React, { useEffect, useState } from "react";

import MainTemplate from "templates/MainTemplate";

const BasketPage = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(localstorageFunction.get("basket"));
  }, []);

  return (
    <MainTemplate>
      {basket.length === 0 ? (
        <p>Masz pusty koszyk</p>
      ) : (
        <p>ilośc produktów wynosi {basket.length}</p>
      )}
    </MainTemplate>
  );
};

export default BasketPage;
