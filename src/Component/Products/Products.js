import React from "react";
import { listProducts } from "../Data";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  return (
    <div className="products-content">
      <h1>This is the page Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia esse
        dignissimos fugiat doloremque provident magnam vel! Nemo, exercitationem
        iusto debitis sed aliquam reiciendis ut facilis itaque sint? Aliquam
        minima obcaecati sequi illo nihil. Dolores officiis maxime dolorum iste
        repellendus omnis quibusdam! Accusantium porro autem ex iusto, rem
        tempore voluptatum sunt temporibus? Quo aspernatur doloribus ratione
        odio. Accusantium quas natus repellat veritatis ullam cupiditate
        obcaecati autem, explicabo tenetur culpa corporis aliquam laborum porro
        ad eaque praesentium iusto et architecto fugiat omnis quisquam dolores
        provident! Rem atque modi minima facere pariatur, nostrum voluptatem
        recusandae, obcaecati commodi, inventore illum aut accusantium. Neque.
      </p>
      <hr style={{ margin: "50px 0" }} />
      <div className="list-products">
        {listProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              <h3>{product.name}</h3>
            </Link>

            <img src={product.img} alt="product" className="product-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
