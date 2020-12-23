import React from "react";
import styled from "styled-components";

import CategoryItems from "components/molecules/CategoryItems";

const Wrapper = styled.div`
  position: sticky;
  top: 87px;
  height: 1px;
`;

const NavCategorySelect = ({ select }) => {
  const onClick = (e, state, title) => {
    const selectTitle = (title) => {
      switch (title) {
        case "Rozmiar":
          return "size";
        case "Kategoria":
          return "category";
        default:
          return;
      }
    };

    const newTitle = selectTitle(title);

    let newTable = { title: newTitle, select: [] };
    for (const [key, value] of Object.entries(state)) {
      if (value) newTable.select.push(key);
    }
    select(newTable);
  };

  return (
    <Wrapper>
      <CategoryItems
        onClick={onClick}
        activeCat="true"
        title="Kategoria"
        itemsProps={["Spodnie", "Koszulki", "Skarpetki"]}
      />

      <CategoryItems
        onClick={onClick}
        title="Rozmiar"
        itemsProps={["S", "XS", "M", "L", "XL"]}
      />
    </Wrapper>
  );
};

export default NavCategorySelect;
