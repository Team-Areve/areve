import ApplyPage from "pages/ApplyPage";
import MainPage from "pages/MainPage";
import LogInPage from "pages/LogInPage";
import RegisterPage from "pages/RegisterPage";
import NavBar from "components/navigator/NavBar";
import MyProfile from "components/modal/MyProfile";
import OtherProfile from "components/modal/OtherProfile";
import ReviewManagePage from "pages/ReviewManagePage";
import ReviewReadModal from "components/modal/ReviewReadModal";
import ReviewWriteModal from "components/modal/ReviewWriteModal";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Path from "./Path";

function Routing() {
  return (
    <Routes>
      <Route path={Path.MainPage} element={<MainPage />} />
      <Route path={Path.ApplyPage} element={<ApplyPage />} />
      <Route path={Path.LogInPage} element={<LogInPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      <Route path={Path.MyPage} element={<MyProfile />} />
      <Route path={Path.Profile} element={<OtherProfile />} />
      <Route path={Path.Drawer} element={<NavBar />} />
      <Route path={Path.ReviewPage} element={<ReviewManagePage />} />
      <Route path={Path.test} element={<ReviewWriteModal />} />
      <Route path={Path.r} element={<ReviewReadModal />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Routing;
