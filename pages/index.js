import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

import products from "../data/products";
import getAllProducts from "../utils/getAllProducts";
import deleteProduct from "../utils/deleteProduct";

export default function Index() {
  const [productsList, setProductsList] = useState(products);
  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setProductsList(getAllProducts);
    } else {
      localStorage.setItem("products", JSON.stringify(productsList));
    }
  }, []);

  const deleteProductHandler = (e) => {
    deleteProduct(e.target.id);
    setProductsList(getAllProducts());
  };

  return (
    <div>
      {/* Main components */}
      <Container>
        <div>
          <h2 className="mt-5 mb-5">Products List</h2>
        </div>

        {/* Create product button */}
        <Link href="/create-product" passHref={true}>
          <Button variant="primary">Create Product</Button>
        </Link>

        {/* Products list start */}
        <div className="d-flex justify-content-evenly flex-wrap">
          {productsList.map((product) => (
            <Link key={product.id} href={`product/${product.id}`} passHref={true}>
              <Card role="button" style={{ width: "18rem" }} className="mb-5 mt-5">
                <Card.Body>
                  <Card.Title>{product.nama}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.kategori}
                  </Card.Subtitle>
                  <Card.Text>{product.deskripsi}</Card.Text>
                  <Link href={`/product/edit/${product.id}`} passHref={true}>
                    <Card.Link id={product.id} className="text-primary">
                      Edit Product
                    </Card.Link>
                  </Link>
                  <Card.Link
                    id={product.id}
                    className="text-danger"
                    onClick={(e) => {
                      deleteProductHandler(e);
                    }}
                  >
                    Delete Product
                  </Card.Link>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
        {/* Products list end */}
      </Container>
    </div>
  );
}
