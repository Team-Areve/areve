import MyProfile from 'components/profile/MyProfile';
import ApplyPage from 'pages/ApplyPage';
import DetailPage from 'pages/DetailPage';
import ListPage from 'pages/ListPage';
import LogInPage from 'pages/LogInPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import ReservePage from 'pages/ReservePage';
import ReviewPage from 'pages/ReviewPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.MainPage} element={<MainPage />} />
      <Route path={Path.ApplyPage} element={<ApplyPage />} />
      <Route path={Path.ReservePage} element={<ReservePage />} />
      <Route path={Path.ListPage} element={<ListPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      <Route path={Path.LogInPage} element={<LogInPage />} />
      <Route path={Path.MyPage} element={<MyProfile />} />
      <Route path={Path.ReviewPage} element={<ReviewPage />} />
      <Route path={Path.DetailPage} element={<DetailPage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Routing;
