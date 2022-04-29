import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";

import addNewProduct from "../utils/addNewProduct";

export default function CreateProduct() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({});

  const inputHandler = (e) => {
    const getInputAttribute = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputAttribute]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      !inputFields.nama ||
      !inputFields.kategori ||
      !inputFields.stok ||
      !inputFields.deskripsi ||
      !inputFields.harga
    ) {
      alert("Kamu belum melengkapi semua data. Yuk, lengkapi dulu!");
    } else {
      addNewProduct(inputFields);
      router.push("/")
    }
  };

  return (
    <div>
      <Container>
        {/* Heading */}
        <div>
          <h2 className="mt-5 mb-5">Create Product</h2>
        </div>
        {/* Form start */}
        <Form className="mt-5" method="POST">
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="nama"
              type="text"
              placeholder="Input product name"
              onChange={inputHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              name="kategori"
              type="text"
              placeholder="Input product category"
              onChange={inputHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              name="stok"
              type="number"
              placeholder="Input product stock"
              onChange={inputHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="deskripsi"
              type="text"
              placeholder="Input product description"
              onChange={inputHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="harga"
              type="number"
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
      </Container>
    </div>
  );
}
