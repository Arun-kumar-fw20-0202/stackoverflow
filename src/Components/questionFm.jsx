import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addingQuestion } from "../Redux/Question/ques.action";
import axios from "axios";

export const QuestionFm = () => {
  const [ques, setQues] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const { questions, isError, isLoading } = useSelector((store) => {
    return {
      isLoading: store.quesReducer.isLoading,
      isError: store.quesReducer.isError,
    };
  });

  const handlePostQues = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let obj = {
      userId: JSON.parse(localStorage.getItem("stackData")).id,
      title: title,
      language: language,
      question: ques,
      date: `${year}-${month}-${day}`,
    };
    axios
      .post("http://localhost:8080/forum", obj)
      .then((res) => {
        setQues("");
        setTitle("");
        setLanguage("");
        alert("Question Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="inputbx">
        <input
          type="text"
          placeholder="question Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputbx">
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>

      <div className="inputbx">
        <textarea
          placeholder="Question Description"
          value={ques}
          onChange={(e) => setQues(e.target.value)}
          cols="110"
          rows="10"
        ></textarea>
      </div>

      <button onClick={handlePostQues}>Post Question</button>
    </>
  );
};
