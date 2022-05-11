import React from "react";
import Review from "../review/review";
import "./preview.scss";

const Preview = ({ reviews }) => (
  <section className="preview">
    <ul className="container">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  </section>
);

export default Preview;
