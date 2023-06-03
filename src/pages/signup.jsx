import React, { useState } from "react";
import "../Styles/signup.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/user/user.action";
import { useNavigate } from "react-router-dom";

let data = {
  username: "",
  password: "",
  email: "",
  avatar: "",
};

export const Signup = () => {
  const [sdata, setSdata] = useState(data);
  const { username, password, email, avatar } = sdata;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let val = e.target.value;
    setSdata({ ...sdata, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(sdata));
    navigate("/login");
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                name="username"
                value={username}
                onChange={handleChange}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="inputBx">
              <input
                name="email"
                value={email}
                onChange={handleChange}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="inputBx">
              <input
                name="password"
                value={password}
                onChange={handleChange}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="inputBx">
              <input
                name="avatar"
                value={avatar}
                onChange={handleChange}
                type="text"
                placeholder="Avatar"
              />
            </div>
            <div className="inputBx">
              <button>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
