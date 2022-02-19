import React, { useState } from "react";
import Header from "../components/main/Header";
import styled from "styled-components";
import Search from "../components/search/Search";
import Category from "../components/main/Category";
import MainList from "components/main/MainList";
import Footer from "components/common/Footer";
import NavBar from "components/navigator/NavBar";

function MainPage() {
	const [toggled, setToggled] = useState(false);
	const getToggled = (value) => {
		setToggled(value);
	};
	return (
		<MainLayout>
			<Header getToggled={getToggled} />
			<NavBar toggled={toggled} getToggled={getToggled} />
			<Search />
			<Category />
			<MainList />
			<Footer />
		</MainLayout>
	);
}

const MainLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
`;

export default MainPage;
