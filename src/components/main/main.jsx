import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import * as auth from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import Preview from "../preview/preview";
import Category from "../category/category";

const Main = (props) => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.logout();
  };

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className="main">
      <Header onLogout={onLogout} />
      <div>
        <Category />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
