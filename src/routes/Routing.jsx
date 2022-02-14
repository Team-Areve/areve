import ApplyPage from "pages/ApplyPage";
import ListPage from "pages/ListPage";
import MainPage from "pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ReservePage from "pages/ReservePage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Path from "./Path";

function Routing() {
	return (
		<Routes>
			<Route path={Path.MainPage} element={<MainPage />} />
			<Route path={Path.ApplyPage} element={<ApplyPage />} />
			<Route path={Path.ReservePage} element={<ReservePage />} />
			<Route path={Path.ListPage} element={<ListPage />} />
			<Route path={Path.RegisterPage} element={<RegisterPage />} />

			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	);
}

export default Routing;
