import {
  ADD_USER,
  ADD_USER_ERROR,
  ADD_USER_REQUEST,
  getUser,
} from "./user.actionType";
import axios from "axios";

export const addUserReq = () => {
  return { type: ADD_USER_REQUEST };
};

export const addUserSucs = (payload) => {
  return { type: ADD_USER, payload };
};

export const addUserErr = () => {
  return { type: ADD_USER_ERROR };
};

export const getuser = (payload) => {
  return { type: getUser, payload };
};

export const addUser = (data) => (dispatch) => {
  dispatch(addUserReq);
  axios
    .post("http://localhost:8080/users", data)
    .then((res) => {
      //   console.log(res.data);
      dispatch(addUserSucs(res.data));
      alert("Signup successfuly");
    })
    .catch((err) => {
      dispatch(addUserErr);
    });
};

export const LoginUser = (data) => (dispatch) => {
  const { username, password } = data;
  dispatch(addUserReq);
  axios
    .get("http://localhost:8080/users", data)
    .then((res) => {
      var check = false;
      //   console.log(res.data);
      res.data.map((ele) => {
        if (ele.username == username && ele.password == password) {
          check = true;
          localStorage.setItem("stackData", JSON.stringify(ele));
          localStorage.setItem("isAuth", JSON.stringify({ isAuth: true }));
        }
      });

      if (check) {
        window.location.href = "/";
        alert("Login successful");
      } else {
        alert("Wrong credential");
      }
    })
    .catch((err) => {
      dispatch(addUserErr);
    });
};

//

export const LoadAlluser = (dispatch) => {
  axios
    .get("http://localhost:8080/users")
    .then((res) => {
      dispatch(getuser(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
