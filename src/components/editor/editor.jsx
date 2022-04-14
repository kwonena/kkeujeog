import React from "react";
import AddReview from "../addReview/addReview";
import Footer from "../footer/footer";
import Header from "../header/header";
import OnePreview from "../onePreview/onePreview";
import "./editor.scss";

const Editor = (props) => {
  return (
    <section className="editor">
      <Header />
      <div>
        <AddReview />
        <OnePreview />
      </div>
      <Footer />
    </section>
  );
};

export default Editor;
