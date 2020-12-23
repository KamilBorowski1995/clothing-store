import React from "react";
import styled from "styled-components";

import product from "components/assets/img/product-1.jpg";
import Paragraph from "components/atoms/Paragraph";

const Wrapper = styled.div`
  width: 250px;
  height: 430px;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const ItemBox = () => {
  const link = product;

  return (
    <Wrapper>
      <StyledImg src={link} alt="produkt" />
      <Paragraph>Lorem ipsum</Paragraph>
      <Paragraph size="semiBold">99,99 PLN</Paragraph>
    </Wrapper>
  );
};

export default ItemBox;
