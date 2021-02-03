import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ match, listProducts }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(listProducts.find((product) => product.id === +match.params.id));
  }, []);

  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <img src={product.img} alt="product" style={{ width: "200px" }} />
      </div>
      <Link to="/products">
        <Button variant="info">Go Back</Button>
      </Link>
    </div>
  );
};

export default Product;
