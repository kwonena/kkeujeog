import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./login.scss";
import * as auth from "../../api/auth.js";

const Login = () => {
  // 로그인 함수
  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    auth // 클릭한 버튼의 텍스트를 인자로 login api에 전달
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className="login">
      <Header />
      <section>
        <h1>Login</h1>
        <ul className="list">
          <li className="item">
            <button className="button" onClick={onLogin}>
              Google
            </button>
          </li>
          <li className="item">
            <button className="button" onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
