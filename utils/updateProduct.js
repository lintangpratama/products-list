const updateProduct = (newProducts) => {
  const productsJson = localStorage.getItem("products");
  const productsArr = JSON.parse(productsJson);
  
  const updatedProducts = productsArr.map((product) => newProducts.find((newProduct) => newProduct.id === product.id) || product);
  localStorage.setItem("products", JSON.stringify(updatedProducts))
};

export default updateProduct;
