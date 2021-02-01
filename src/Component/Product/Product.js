import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listProducts } from "../Data";
import "./product.css";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  console.log(match);

  useEffect(() => {
    setProduct(listProducts.find((product) => product.id === +match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
