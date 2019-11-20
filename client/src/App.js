import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Product from "./pages/product/Product.component";
import ShoppingBag from "./pages/shopping-bag/ShoppingBag.component";

import "./App.scss";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Cart" component={ShoppingBag} />
      </Switch>
    </div>
  );
}

export default App;
