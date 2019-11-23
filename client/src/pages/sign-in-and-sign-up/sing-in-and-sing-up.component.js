import React from "react";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/Sign-Up.component";

import "./sign-in-and-sign-up.styles.scss";

const SingInAndSignUp = () => {
  return (
    <div>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};
export default SingInAndSignUp;
