import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homepage from "./pages/homepage/Homepage.component";
import Product from "./pages/product/Product.component";
import ShoppingBag from "./pages/shopping-bag/ShoppingBag.component";
import NotFound from "./pages/not-found/Not-Found.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sing-in-and-sing-up.component";
import { auth } from "./firebase/firebase.utils";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => [
    (this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    }))
  ];

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Product/:id" component={Product} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route exact path="/Cart" component={ShoppingBag} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
