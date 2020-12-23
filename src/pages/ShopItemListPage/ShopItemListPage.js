import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MainTemplate from "templates/MainTemplate";

import NavCategorySelect from "components/organism/NavCategorySelect";
import ItemBox from "components/molecules/ItemBox";

import Loader from "components/atoms/Loader/Loader";
import { server } from "config";

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 20% auto;
`;

const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 30px 0;
  justify-items: center;
  /* background-color: red; */
`;

const ShopItemListPage = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoader] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const type = props.match.params.type;
    setProducts([]);
    setLoader(false);

    axios
      .get(`${server}/products`, {
        params: {
          type,
        },
      })
      .then(function (response) {
        setTimeout(() => {
          setLoader(true);
          setProducts(response.data);
          console.log(response.data);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [history.location.pathname]);

  const mapItem = products.map(({ _id, name, cash, image }) => (
    <ItemBox
      key={_id}
      title={name}
      cash={cash}
      image={`${server}/products/${image}/image`}
    />
  ));

  return (
    <MainTemplate>
      <Wrapper>
        <NavCategorySelect />
        <WrapperProducts>{loaded ? mapItem : <Loader />}</WrapperProducts>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopItemListPage;
