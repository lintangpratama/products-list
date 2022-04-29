import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";
import getProductById from "../../../utils/getProductById";
import updateProduct from "../../../utils/updateProduct";

export default function CreateProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [productsList, setProductsList] = useState([
    {
      id: id,
      nama: "",
      kategori: "",
      stok: "",
      deskripsi: "",
      harga: "",
    },
  ]);

  useEffect(() => {
    setProductsList(getProductById(id));
  }, [id]);

  const inputHandler = (e) => {
    const getInputAttribute = e.target.getAttribute("name");

    setProductsList([
      {
        ...productsList[0],
        [getInputAttribute]: e.target.value
      }
    ])
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      !productsList[0].nama ||
      !productsList[0].kategori ||
      !productsList[0].stok ||
      !productsList[0].deskripsi ||
      !productsList[0].harga
    ) {
      alert("Kamu belum melengkapi semua data. Yuk, lengkapi dulu!");
    } else {
      updateProduct(productsList);
      router.push("/");
    }
  };

  return (
    <div>
      <Container>
        {/* Heading */}
        <div>
          <h2 className="mt-5 mb-5">Edit Product</h2>
        </div>
        {productsList.map((product) => (
          <>
            {/* Form start */}
            <Form key={product.id} className="mt-5" method="POST">
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  id="nama"
                  name="nama"
                  type="text"
                  value={product.nama}
                  placeholder="Input product name"
                  onChange={inputHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  id="kategori"
                  name="kategori"
                  type="text"
                  value={product.kategori}
                  placeholder="Input product category"
                  onChange={inputHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  id="stok"
                  name="stok"
                  type="number"
                  value={product.stok}
                  placeholder="Input product stock"
                  onChange={inputHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="deskripsi"
                  name="deskripsi"
                  type="text"
                  value={product.deskripsi}
                  placeholder="Input product description"
                  onChange={inputHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  id="harga"
                  name="harga"
                  type="number"
                  value={product.harga}
                  placeholder="Input product price"
                  onChange={inputHandler}
                />
              </Form.Group>

              <Button
                className="mt-3 mb-5"
                variant="dark"
                type="submit"
                onSubmit={submitFormHandler}
                onClick={submitFormHandler}
              >
                Submit
              </Button>
            </Form>
            {/* Form end */}
          </>
        ))}
      </Container>
    </div>
  );
}
