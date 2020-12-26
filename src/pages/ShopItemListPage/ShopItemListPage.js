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
  min-height: 100vh;
`;

const ShopItemListPage = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoader] = useState(false);

  const history = useHistory();

  useEffect(() => {
    document.title = ` ${props.match.params.type}`;
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
        }, 1000 * 2);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [history.location.pathname]);

  const handleClickBox = (e, id) => {
    const type = props.match.params.type;
    history.push(`/shop/${type}/${id}`);
  };

  const mapItem = products.map(({ _id, name, cash, image }) => (
    <ItemBox
      onClick={handleClickBox}
      key={_id}
      id={_id}
      title={name}
      cash={cash}
      image={`${server}/products/${image}/image`}
    />
  ));

  const renderElements =
    mapItem.length > 0 ? mapItem : <p>Brak pasujących elementów</p>;

  const handleSelect = (selectItems) => {
    const type = props.match.params.type;
    setProducts([]);
    setLoader(false);
    axios
      .get(`${server}/products/search`, {
        params: {
          type,
          title: selectItems.title,
          select: selectItems.select,
        },
      })
      .then(function (response) {
        setTimeout(() => {
          console.log(response);
          setLoader(true);
          setProducts(response.data);
        }, 1000 * 2);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <MainTemplate>
      <Wrapper>
        <NavCategorySelect select={handleSelect} />
        <WrapperProducts>
          {loaded ? renderElements : <Loader />}
        </WrapperProducts>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopItemListPage;
