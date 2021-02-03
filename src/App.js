import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import Footer from "./Component/Footer/Footer";
import { listProducts } from "./Component/Data";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          render={() => <Products listProducts={listProducts} />}
        />
        <Route path="/about" component={About} />
        <Route
          exact
          path="/product/:id"
          render={(defaultProps) => (
            <Product {...defaultProps} listProducts={listProducts} />
          )}
        />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
