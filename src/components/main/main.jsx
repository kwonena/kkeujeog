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
  const [reviews, setReviews] = useState([
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

  // 로그아웃 함수
  const onLogout = () => {
    auth.logout();
  };

  // 사용자 로그인 여부 확인
  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [navigate, userId]);

  // 리뷰 추가 함수
  const addReview = (review) => {
    console.log(review);
    // setReviews((reviews) => {
    //   const updated = { ...reviews };
    //   updated[review.id] = review;
    //   return updated;
    // });
    // repository.saveReview(userId, review);
  };

  // 리뷰 삭제 함수
  const deleteReview = (review) => {
    setReviews((reviews) => {
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
        <Category addReview={addReview} />
        <Preview reviews={reviews} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
