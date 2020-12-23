import React, { useState } from "react";
import styled from "styled-components";

import MainTemplate from "templates/MainTemplate";

import NavCategorySelect from "components/organism/NavCategorySelect";
import ItemBox from "components/molecules/ItemBox";

import product from "components/assets/img/product-1.jpg";
import product2 from "components/assets/img/product-2.jpg";
import product3 from "components/assets/img/product-3.jpg";

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
`;

const listProduct = [
  {
    id: 1,
    title: "bolerko",
    cash: 99.99,
    image: product,
  },
  {
    id: 2,
    title: "Sukienka",
    cash: 199.99,
    image: product2,
  },
  {
    id: 3,
    title: "Spodnie",
    cash: 129.99,
    image: product3,
  },
  {
    id: 7,
    title: "Spodnie",
    cash: 129.99,
    image: product3,
  },
  {
    id: 6,
    title: "Sukienka",
    cash: 199.99,
    image: product2,
  },
  {
    id: 5,
    title: "bolerko",
    cash: 99.99,
    image: product,
  },
  {
    id: 1,
    title: "bolerko",
    cash: 99.99,
    image: product,
  },
  {
    id: 2,
    title: "Sukienka",
    cash: 199.99,
    image: product2,
  },
  {
    id: 3,
    title: "Spodnie",
    cash: 129.99,
    image: product3,
  },
  {
    id: 7,
    title: "Spodnie",
    cash: 129.99,
    image: product3,
  },
  {
    id: 6,
    title: "Sukienka",
    cash: 199.99,
    image: product2,
  },
  {
    id: 5,
    title: "bolerko",
    cash: 99.99,
    image: product,
  },
];

const ShopItemListPage = () => {
  const [products, setProducts] = useState(listProduct);

  const mapItem = products.map(({ id, title, cash, image }) => (
    <ItemBox key={id} title={title} cash={cash} image={image} />
  ));

  return (
    <MainTemplate>
      <Wrapper>
        <NavCategorySelect />
        <WrapperProducts>{mapItem}</WrapperProducts>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopItemListPage;
