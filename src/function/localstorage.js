const fixSize = ["S", "XS", "M", "L", "XL"];

const searchElement = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return true;
      break;
    }
    return false;
  }
};

export const localstorageFunction = {
  set(title, item) {
    localStorage.setItem(title, JSON.stringify(item));
  },
  get(title) {
    let array = localStorage.getItem(title);
    array = JSON.parse(array);
    return array;
  },
  async add(title, id, amount, sizeNumber) {
    let array = localStorage.getItem(title);
    array = JSON.parse(array);

    const exitID = searchElement(array, id);

    //dodać jakąś informację
    if (exitID) return;

    const size = fixSize[sizeNumber];

    const newItem = {
      id,
      amount,
      size,
    };

    if (!array) {
      array[0] = newItem;
    } else {
      array[array.length] = newItem;
    }
    localStorage.setItem(title, JSON.stringify(array));
  },
};
