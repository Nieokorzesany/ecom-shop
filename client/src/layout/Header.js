import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../components/cart-icon/cart-icon.component";
import CardDropdown from "../components/cart-dropdown/cart-dropdown.component";

import "./Header.styles.scss";
import { auth } from "../firebase/firebase.utils";
import CartDropdown from "../components/cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cart }) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <div className="logo">Swag Shop</div>
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon className="option" />
      </div>
      {cart.hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cart: state.cart
});

export default connect(mapStateToProps)(Header);
