const deleteProduct = (id) => {
    id = parseInt(id);
    const products = JSON.parse(localStorage.getItem("products"));
    const filteredProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
}

export default deleteProduct