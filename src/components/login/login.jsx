import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./login.scss";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <section>
        <h1>Login</h1>
        <ul className="list">
          <li className="item">
            <button className="button">Google</button>
          </li>
          <li className="item">
            <button className="button">Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
