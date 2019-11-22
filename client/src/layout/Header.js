import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.scss";

const Header = () => {
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
        <Link className="option" to="/signin">
          Sign In
        </Link>
        <Link className="option" to="/Cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
