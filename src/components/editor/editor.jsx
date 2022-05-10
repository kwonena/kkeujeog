import React from "react";
import OnePreview from "../onePreview/onePreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import AddPreview from "../addPreview/addPreview";
import "./editor.scss";

const Editor = ({ addReview }) => {
  return (
    <section className="editor">
      <Header />
      <div>
        <OnePreview />
        <AddPreview addReview={addReview} />
      </div>
      <Footer />
    </section>
  );
};

export default Editor;
