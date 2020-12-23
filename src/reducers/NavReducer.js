export const NavReducer = (store, action) => {
  switch (action.type) {
    case "ADD_SELECT":
      return { ...store, [action.name]: action.selected };

    default:
      return store;
  }
};
