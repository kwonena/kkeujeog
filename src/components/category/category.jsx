import React from "react";
import "./category.scss";

const Category = ({ user }) => (
  <section className="category">
    <div className="addContainer">
      <h1>{user ? `${user}님, 환영합니다.` : "로그인 해주세요:)"}</h1>
      <button className="addBtn">+ 새 리뷰 등록</button>
      <span className="count">전체 리뷰 - 0개</span>
    </div>
    <hr />
    <div className="categoryContainer">
      <span>카테고리 목록</span>
      <button>추가할 카테고리</button>
    </div>
  </section>
);

export default Category;
