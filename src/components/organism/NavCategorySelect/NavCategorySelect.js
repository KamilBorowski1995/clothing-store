import React from "react";
import styled from "styled-components";

import CategoryItems from "components/molecules/CategoryItems";

const Wrapper = styled.div`
  position: sticky;
  top: 87px;
  height: 1px;
`;

const NavCategorySelect = () => {
  return (
    <Wrapper>
      <CategoryItems
        title="Kolor"
        itemsProps={["biały", "czarny", "czerwony"]}
      />

      <CategoryItems title="Rozmiar" itemsProps={["S", "XS", "M", "L", "XL"]} />
    </Wrapper>
  );
};

export default NavCategorySelect;
