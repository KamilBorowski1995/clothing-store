import React from "react";

import CategoryItems from "components/molecules/CategoryItems";

const NavCategorySelect = () => {
  return (
    <div>
      <CategoryItems
        title="Kolor"
        itemsProps={["biały", "czarny", "czerwony"]}
      />

      <CategoryItems title="Rozmiar" itemsProps={["S", "XS", "M", "L", "XL"]} />
    </div>
  );
};

export default NavCategorySelect;
