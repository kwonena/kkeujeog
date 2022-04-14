import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import * as auth from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import Preview from "../preview/preview";
import Category from "../category/category";

const Main = (props) => {
  const [reviews, setreviews] = useState([
    {
      id: "1",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: "/images/지구에서 한아뿐.jpg",
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: "earth.png",
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: "earth.png",
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
    {
      id: "2",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: null,
    },
  ]);
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
        <Category reviews={reviews} />
        <Preview reviews={reviews} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
