import Footer from "components/common/Footer";
import H2Box from "components/common/H2Box";
import ItemList from "components/list/ItemList";
import ListFilter from "components/list/ListFilter";
import Header from "components/main/Header";
import { PageLayout } from "lib/styles/utilStyles";
import React, { useState } from "react";
import { categoryList } from "lib/categoryList";
import { useParams } from "react-router-dom";
import NavBar from "components/navigator/NavBar";

function ListPage() {
	const { catNum } = useParams();
	let cat = categoryList[catNum - 1].text;
	const [toggled, setToggled] = useState(false);
	const getToggled = (value) => {
		setToggled(value);
	};
	return (
		<>
			<Header getToggled={getToggled} />
			<NavBar toggled={toggled} getToggled={getToggled} />
			<PageLayout>
				<H2Box>{cat}</H2Box>
				<ListFilter></ListFilter>
				<ItemList catNum={catNum} cat={cat}></ItemList>
			</PageLayout>
			<Footer />
		</>
	);
}

export default ListPage;
