import React, { useRef, useState } from "react";
import "./addPreview.scss";

const AddPreview = ({ addReview }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const contentRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const review = {
      id: Date.now(), //uuid
      name: titleRef.current.value || "",
      company: categoryRef.current.value || "",
      theme: contentRef.current.value,
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addReview(review);
  };
  return (
    <form ref={formRef}>
      <span>어디에서 본 작품인가요?</span>
      <select ref={categoryRef} name="category" placeholder="category">
        <option placeholder="book">book</option>
        <option placeholder="movie">movie</option>
        <option placeholder="ETC">ETC</option>
      </select>
      <span>이미지가 있다면 첨부해주세요!</span>
      <input class="file" type="text" name="title" placeholder="Title" />
      <span>제목은 무엇인가요?</span>
      <input
        ref={titleRef}
        type="text"
        name="title"
        placeholder="제목을 입력해주세요."
      />
      <span>어떤 내용인지 알려주세요!</span>
      <textarea
        ref={contentRef}
        name="content"
        placeholder="기록할 내용을 입력해주세요."
      />
      <button>저장</button>
    </form>
  );
};

export default AddPreview;
