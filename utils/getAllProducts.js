const getAllProducts = () => {
  const products = localStorage.getItem("products");
  return JSON.parse(products);
};

export default getAllProducts;
