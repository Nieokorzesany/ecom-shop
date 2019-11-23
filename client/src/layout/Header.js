import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.styles.scss";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
        <Link className="option" to="/Cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
