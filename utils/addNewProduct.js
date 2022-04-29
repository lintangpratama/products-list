const addNewProduct = (newProduct) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const product = {
        id: Math.floor(Math.random() * 1000001),
        ...newProduct
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
}

export default addNewProduct;