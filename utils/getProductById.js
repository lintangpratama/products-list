const getProductById = (id) => {
    id = parseInt(id);
    const productsJSON = localStorage.getItem("products");
    const productList = JSON.parse(productsJSON);
    const productById = productList.filter((product) => product.id === id);
    return productById;
  };
  
  export default getProductById;
  