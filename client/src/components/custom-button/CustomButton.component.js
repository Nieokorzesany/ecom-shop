import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
