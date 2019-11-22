import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import SignIn from "../../components/SignIn/SignIn.component";

import "./sign-in-and-sign-up.styles.scss";

const SingInAndSignUp = () => {
  return (
    <div>
      <Header />
      <div className="sign-in-and-sign-up">
        <SignIn /> Sign up
      </div>
      <Footer />
    </div>
  );
};
export default SingInAndSignUp;
