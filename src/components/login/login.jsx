import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./login.scss";
import * as auth from "../../api/auth.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // main으로 이동하게 해주는 함수이며,
  // 사용자의 고유 uid를 전달해줌
  const goToMain = (userId) => {
    navigate({
      pathname: "/main",
      state: { id: userId },
    });
  };

  // 로그인 함수
  const onLogin = (event) => {
    auth // 클릭한 버튼의 텍스트를 인자로 login api에 전달
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  // 이미 로그인된 사용자의 정보가 있다면 자동으로 main 이동
  useEffect(() => {
    auth //
      .onAuthChange((user) => {
        user && goToMain(user.uid);
      });
  });

  return (
    <section className="login">
      <Header />
      <section>
        <h1 className="loginTitle">LOGIN</h1>
        <ul className="list">
          <li className="item">
            <button className="button" onClick={onLogin}>
              <p className="text">Google</p>
            </button>
          </li>
          <li className="item">
            <button className="button" onClick={onLogin}>
              <p className="text">Github</p>
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
