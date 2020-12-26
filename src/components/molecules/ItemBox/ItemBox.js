import React from "react";
import styled from "styled-components";

import Paragraph from "components/atoms/Paragraph";

const Wrapper = styled.div`
  width: 250px;
  /* height: 430px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const WrapperImg = styled.div`
  height: 375px;
  overflow: hidden;
`;

const StyledImg = styled.div`
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const StyledTitle = styled(Paragraph)`
  padding: 7px 0;
`;

const ItemBox = ({ image, title, cash, onClick, id }) => {
  return (
    <Wrapper>
      <WrapperImg onClick={(e) => onClick(e, id)}>
        <StyledImg src={image} alt="produkt" />
      </WrapperImg>

      <StyledTitle>{title}</StyledTitle>
      <Paragraph size="semiBold">{`${cash}PLN`}</Paragraph>
    </Wrapper>
  );
};

export default ItemBox;
