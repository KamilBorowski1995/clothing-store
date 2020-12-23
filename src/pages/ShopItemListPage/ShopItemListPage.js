import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import MainTemplate from "templates/MainTemplate";

import NavCategorySelect from "components/organism/NavCategorySelect";
import ItemBox from "components/molecules/ItemBox";

import product from "components/assets/img/product-1.jpg";
import product2 from "components/assets/img/product-2.jpg";
import product3 from "components/assets/img/product-3.jpg";
import { server } from "config";

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 20% auto;
`;

const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 20px 0;
  justify-items: center;
  /* background-color: red; */
`;

const ShopItemListPage = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoader] = useState(false);

  useEffect(() => {
    axios
      .get(`${server}/products`)
      .then(function (response) {
        setTimeout(() => {
          setLoader(true);
          setProducts(response.data);
        }, 2000);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const mapItem = products.map(({ _id, name, cash, image }) => (
    <ItemBox key={_id} title={name} cash={cash} image={image} />
  ));

  return (
    <MainTemplate>
      <Wrapper>
        <NavCategorySelect />
        <WrapperProducts>{loaded ? mapItem : <p>Ładowanie</p>}</WrapperProducts>
        )
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopItemListPage;
