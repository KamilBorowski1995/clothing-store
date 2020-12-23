import React from "react";
import styled from "styled-components";

import MainTemplate from "templates/MainTemplate";

import NavCategorySelect from "components/organism/NavCategorySelect";
import ItemBox from "components/molecules/ItemBox";

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

const ShopItemListPage = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <NavCategorySelect />
        <WrapperProducts>
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </WrapperProducts>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopItemListPage;
