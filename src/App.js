import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/products/:id" component={Product} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
