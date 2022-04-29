import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import getProductById from "../../utils/getProductById";
import deleteProduct from "../../utils/deleteProduct";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [productsList, setProductsList] = useState([
    {
      nama: "",
      kategori: "",
      stok: "",
      deskripsi: "",
      harga: "",
    },
  ]);

  const deleteProductHandler = (e) => {
    deleteProduct(e.target.id);
    router.push("/");
  };

  useEffect(() => {
    setProductsList(getProductById(id));
  }, [id]);

  return (
    <div>
      {/* Main components */}
      <Container>
        <div className="mb-5">
          <h2 className="mt-5 mb-5">Product Detail</h2>
        </div>

        {productsList.map((product) => (
          <Card key={product.id}>
            <Card.Body>
              <Card.Title>{product.nama}</Card.Title>
              <Card.Text>
                {product.deskripsi}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Kategori: {product.kategori}</ListGroupItem>
              <ListGroupItem>Stok: {product.stok}</ListGroupItem>
              <ListGroupItem>Harga: {product.harga}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link href={`/product/edit/${product.id}`} passHref={true}>
                <Card.Link className="text-primary">Edit Product</Card.Link>
              </Link>
              <Card.Link
                id={product.id}
                role="button"
                className="text-danger"
                onClick={(e) => {
                  deleteProductHandler(e);
                }}
              >
                Delete Product
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
