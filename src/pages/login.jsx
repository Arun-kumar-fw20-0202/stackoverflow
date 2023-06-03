import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Redux/user/user.action";
import { useNavigate } from "react-router-dom";

const login_data = {
  username: "",
  password: "",
};
export const Login = () => {
  const [lData, setLdata] = useState(login_data);
  const { username, password } = lData;
  let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let val = e.target.value;
    setLdata({ ...lData, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(lData));
  };

  useEffect(() => {
    if (isAuth.isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <>
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
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div className="inputBx">
                <button>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};
