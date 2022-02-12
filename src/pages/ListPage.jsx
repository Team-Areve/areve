import Footer from "components/common/Footer";
import H2Box from "components/common/H2Box";
import ItemList from "components/list/ItemList";
import ListFilter from "components/list/ListFilter";
import Header from "components/main/Header";
import { PageLayout } from "lib/styles/utilStyles";
import React from "react";
import { categoryList } from "lib/categoryList";
import { useParams } from "react-router-dom";

function ListPage() {
	const { catNum } = useParams();
	let cat = categoryList[catNum].text;
	return (
		<>
			<Header />
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
