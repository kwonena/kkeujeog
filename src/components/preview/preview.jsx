import React from "react";
import Review from "../review/review";
import "./preview.scss";

const Preview = ({ reviews }) => (
  <section className="preview">
    <div className="container">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  </section>
);

export default Preview;
