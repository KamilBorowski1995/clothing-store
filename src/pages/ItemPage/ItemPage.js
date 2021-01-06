import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MainTemplate from "templates/MainTemplate";
import { server } from "config";

import Loader from "components/atoms/Loader/Loader";
import SliderImageSinglePage from "components/organism/SliderImageSinglePage";

import ProductPanel from "components/organism/ProductPanel";

import Paragraph from "components/atoms/Paragraph";

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 40% 40%;
`;

const WrapperSectionParagraph = styled.div`
  margin-top: 30px;
`;

const StyledHeader = styled(Paragraph)`
  padding: 20px 0;
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
                <WrapperSectionParagraph>
                  <StyledHeader size="xl">Lorem ipsum</StyledHeader>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam sequi excepturi doloremque nulla iusto voluptate
                    mollitia rem omnis nobis qui. Aliquid minus repellendus
                    corporis, adipisci quis deserunt nihil quae, delectus cumque
                    laudantium accusantium voluptatum voluptate eaque quos?
                    Aliquid consectetur, dolore doloribus nam ratione sed
                    voluptate maxime delectus, at hic doloremque nobis libero.
                    Minima iure officiis culpa molestiae vero modi neque cum
                    dolores aut. Blanditiis distinctio eveniet corporis
                    voluptatem. Error laborum id cupiditate fugit amet quae
                    doloribus, fuga praesentium minima voluptatum harum nam
                    veritatis. Doloremque vero quasi consequatur necessitatibus
                    adipisci nemo, quae tempore quam dolorum labore natus dolore
                    illo commodi ab!
                  </Paragraph>
                </WrapperSectionParagraph>
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
