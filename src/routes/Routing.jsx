import ApplyPage from "pages/ApplyPage";
import MainPage from "pages/MainPage";
import LogInPage from "pages/LogInPage";
import RegisterPage from "pages/RegisterPage";
import NavBar from "components/navigator/NavBar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Path from "./Path";

function Routing() {
  return (
    <Routes>
      <Route path={Path.NavBar} element={<NavBar />} />
      <Route path={Path.ApplyPage} element={<ApplyPage />} />
      <Route path={Path.LogInPage} element={<LogInPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Routing;
