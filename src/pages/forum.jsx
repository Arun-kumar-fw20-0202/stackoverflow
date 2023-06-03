import React, { useEffect, useState } from "react";
import "../Styles/fourum.css";
import { Link } from "react-router-dom";
import { QuestionFm } from "../Components/questionFm";
import { useDispatch, useSelector } from "react-redux";
import { getAllques } from "../Redux/Question/ques.action";
import { LoadAlluser } from "../Redux/user/user.action";

export const Forum = () => {
  const [showFm, setShowFm] = useState(true);
  const dispatch = useDispatch();
  const { questions, user } = useSelector((store) => {
    return {
      user: store.userReducer.user,
      questions: store.quesReducer.questions,
    };
  });
  let data = questions[0];
  let data2 = user[0];

  // questions.map((ele) => {
  //   console.log(ele);
  // });

  // console.log(data);

  useEffect(() => {
    dispatch(LoadAlluser);
    dispatch(getAllques);
  }, []);

  return (
    <>
      <div className="forum">
        <button onClick={() => setShowFm(true)}>Ask Question</button>
        <div className="box">{showFm ? <QuestionFm /> : ""}</div>
        {/*  */}
        <div className="quesBx">
          {data &&
            data.map((ele) =>
              data2.map((el) =>
                ele.userId == el.id ? (
                  <div key={ele.id} className="card">
                    <div className="imgbx">
                      <img src={ele.userId == el.id ? el.avatar : ""} alt="" />
                      <p>{ele.userId == el.id ? el.username : ""}</p>
                    </div>
                    <div className="ques">
                      <Link key={ele.id} to={`/answer/${ele.id}`}>
                        <h4>{ele.question}</h4>
                      </Link>
                      <div className="col">
                        <span>{ele.language}</span>
                        <span>{ele.date}</span>
                        <span>{120} Answers</span>
                      </div>
                    </div>
                    <div className="likeBx">
                      <button>like</button>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )}
        </div>
      </div>
    </>
  );
};
