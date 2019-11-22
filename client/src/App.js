import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Product from "./pages/product/Product.component";
import ShoppingBag from "./pages/shopping-bag/ShoppingBag.component";
import NotFound from "./pages/not-found/Not-Found.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sing-in-and-sing-up.component";

import "./App.scss";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Product/:id" component={Product} />
        <Route exact path="/signin" component={SignInAndSignUp} />
        <Route exact path="/Cart" component={ShoppingBag} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
