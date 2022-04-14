import React from "react";
import "./review.scss";

// 이미지 경로 오류
const DEFAULT_IMAGE = "/images/default.png";

const Review = ({ review }) => {
  const { title, category, content, fileURL } = review;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className="review">
      <div>
        <p className="category">{category}</p>
        <img className="img" src={url} alt="profile" />
        <h1>{title}</h1>
      </div>
    </li>
  );
};

export default Review;
