import ApplyPage from 'pages/ApplyPage';
import MainPage from 'pages/MainPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.MainPage} element={<MainPage />} />
      <Route path={Path.ApplyPage} element={<ApplyPage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Routing;
