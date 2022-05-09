import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import * as auth from "../../api/auth.js";
import { useLocation, useNavigate } from "react-router-dom";
import Preview from "../preview/preview";
import Category from "../category/category";
import * as repository from "../../api/repository.js";

const Main = (props) => {
  const navigate = useNavigate();
  const navigeteState = useLocation().state;
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
      fileURL: "/images/지구에서 한아뿐.jpg",
    },
    {
      id: "3",
      title: "지구에서 한아뿐",
      category: "book",
      content: "funny",
      fileName: "earth",
      fileURL: "/images/지구에서 한아뿐.jpg",
    },
  ]);
  const [userId, setUserId] = useState(navigeteState && navigeteState.id);
  console.log(userId);
  const onLogout = () => {
    auth.logout();
  };

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [navigate, userId]);

  const addReview = (review) => {
    setreviews((reviews) => {
      const updated = { ...reviews };
      updated[review.id] = review;
      return updated;
    });
    repository.saveReview(userId, review);
  };

  const deleteReview = (review) => {
    setreviews((reviews) => {
      const updated = { ...reviews };
      delete updated[review.id];
      return updated;
    });
    repository.removeReview(userId, review);
  };

  return (
    <section className="main">
      <Header onLogout={onLogout} />
      <div>
        <Category reviews={reviews} addReview={addReview} />
        <Preview reviews={reviews} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
