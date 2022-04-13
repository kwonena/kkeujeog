import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.scss";

const Category = () => {
  const navigate = useNavigate();

  return (
    <section className="category">
      <div className="container">
        <div className="addContainer">
          <h1>권이나님, 환영합니다.</h1>
          <button onClick={() => navigate("/editor")}>+ 새 리뷰 등록</button>
          <span>전체 리뷰 - 0개</span>
        </div>
        <div className="categoryContainer">
          <span>카테고리 목록</span>
          <div>
            <input placeholder="추가할 카테고리"></input>
            <button>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
