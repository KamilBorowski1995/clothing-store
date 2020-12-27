import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MainTemplate from "templates/MainTemplate";
import { server } from "config";

import Loader from "components/atoms/Loader/Loader";
import SliderImageSinglePage from "components/organism/SliderImageSinglePage";

import ProductPanel from "components/organism/ProductPanel";

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 45% 45%;
`;

const ItemPage = (props) => {
  const [product, setProducts] = useState([]);
  const [loaded, setLoader] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    setProducts([]);
    setLoader(false);
    axios
      .get(`${server}/products/product`, {
        params: {
          id,
        },
      })
      .then(function (response) {
        setTimeout(() => {
          setLoader(true);
          console.log(response.data);
          setProducts(response.data);
        }, 1000 * 1);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [history.location.pathname]);

  return (
    <MainTemplate>
      <>
        {loaded ? (
          <>
            {product.length > 0 ? (
              <Wrapper>
                <SliderImageSinglePage product={product[0].pictures} />
                <ProductPanel product={product[0]} />
              </Wrapper>
            ) : null}
          </>
        ) : (
          <Loader />
        )}
      </>
    </MainTemplate>
  );
};

export default ItemPage;
