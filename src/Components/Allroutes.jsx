import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Answer } from "../pages/answer";
import { Forum } from "../pages/forum";
import { PrivateRoute } from "./PrivateRoute";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Forum />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/answer/:id" element={<Answer2 />} />
      </Routes>
    </>
  );
};
