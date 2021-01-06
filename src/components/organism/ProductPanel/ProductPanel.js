import React, { useState } from "react";
import styled from "styled-components";

import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  position: sticky;
  top: 87px;
  height: 100%;
`;

const SectionWrapper = styled.div`
  padding: 20px 0 40px;
  ${({ border }) =>
    border &&
    `
        border-top: 1px solid ${theme.colors.second};
        border-bottom: 1px solid ${theme.colors.second};
    `}
`;

const StyleParagraph = styled(Paragraph)`
  margin-bottom: 13px;
`;
const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const ProductPanel = ({ product }) => {
  const [activeSize, setActiveSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleClick = (e, index) => {
    setActiveSize(index);
    setQuantity(1);
  };

  const sizeMap =
    product &&
    product.size.map((size, index) => (
      <Button
        key={size.name + index}
        type="clothing"
        active={activeSize === index ?? true}
        onClick={(e) => handleClick(e, index)}
        disabled={size.amount === 0 && true}
      >
        {size.name}
      </Button>
    ));

  return (
    <Wrapper>
      <SectionWrapper>
        <Paragraph size="xl">{product.name}</Paragraph>
        <Paragraph size="l">{product.cash} PLN</Paragraph>
      </SectionWrapper>
      <SectionWrapper border="true">
        <StyleParagraph size="semiBold">Rozmiar</StyleParagraph>
        {sizeMap}
      </SectionWrapper>
      <SectionWrapper>
        <StyleParagraph size="semiBold">Ilość</StyleParagraph>
        <QuantityWrapper>
          <div>
            <Button
              type="clothing"
              onClick={() => {
                if (quantity > 1) setQuantity((prevValue) => prevValue - 1);
              }}
            >
              -
            </Button>
            <Button type="clothing" disabled="true">
              {quantity}
            </Button>
            <Button
              type="clothing"
              onClick={() => {
                if (product.size[activeSize].amount > quantity) {
                  setQuantity((prevValue) => prevValue + 1);
                }
              }}
            >
              +
            </Button>
          </div>
          <Paragraph>{quantity * product.cash} PLN</Paragraph>
        </QuantityWrapper>
        <Button>Dodaj do koszyka</Button>
      </SectionWrapper>
    </Wrapper>
  );
};

export default ProductPanel;
