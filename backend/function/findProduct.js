const findProduct = async (products, data) => {
  console.log(data);
  const comp = [];
  switch (data.title) {
    case "size":
      await products.filter((product) => {
        if (product.size !== undefined) {
          for (const [key, value] of Object.entries(product.size)) {
            data.select.forEach((item) => {
              if (item.toLowerCase() === key && value > 0) {
                if (comp.length) {
                  const isSame = comp.filter(({ _id }) => _id == product._id);
                  if (isSame) return;
                  comp.push(product);
                } else comp.push(product);
              }
            });
          }
        }
      });
      return comp;
    case "category":
      await products.filter((product) => {
        console.log(product);
        if (product.category !== undefined) {
          console.log(product.category);
          data.select.forEach((item) => {
            if (item.toLowerCase() === product.category) {
              if (comp.length) {
                const isSame = comp.filter(({ _id }) => _id == product._id);
                if (isSame) return;
                comp.push(product);
              } else comp.push(product);
            }
          });
        }
      });
      return comp;

    default:
      return products;
  }
};

module.exports.findProduct = findProduct;
