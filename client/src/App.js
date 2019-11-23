import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homepage from "./pages/homepage/Homepage.component";
import Product from "./pages/product/Product.component";
import ShoppingBag from "./pages/shopping-bag/ShoppingBag.component";
import NotFound from "./pages/not-found/Not-Found.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sing-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

import "./App.scss";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Product/:id" component={Product} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/Cart" component={ShoppingBag} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapSTateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapSTateToProps, mapDispatchToProps)(App);
