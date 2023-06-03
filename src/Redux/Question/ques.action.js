import axios from "axios";
import {
  ADD_QUES,
  ADD_QUES_ERROR,
  ADD_QUES_REQUEST,
  GET_QUES,
} from "./ques.actionType";

export const addQuesReq = () => {
  return { type: ADD_QUES_REQUEST };
};

export const addQuesSucs = (payload) => {
  return { type: ADD_QUES, payload };
};

export const addQuesErr = () => {
  return { type: ADD_QUES_ERROR };
};

export const getQues = (payload) => {
  return { type: GET_QUES, payload };
};

export const getAllques = (dispatch) => {
  axios
    .get("http://localhost:8080/forum")
    .then((res) => {
      dispatch(getQues(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
