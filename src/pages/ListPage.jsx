import Footer from "components/common/Footer";
import H2Box from "components/common/H2Box";
import ItemList from "components/list/ItemList";
import ListFilter from "components/list/ListFilter";
import { PageLayout } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import { categoryList } from "lib/categoryList";
import { useLocation, useSearchParams } from "react-router-dom";

function ListPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchKey = searchParams.get("q");
	const category = searchParams.get("category");
	const seller = searchParams.get("seller");
	const catText = category !== null ? categoryList[category].text : "";
	const [text, setText] = useState("");

	useEffect(() => {
		if (searchKey !== null) {
			setText(searchKey);
		} else if (catText !== "") {
			setText(catText);
		} else if (seller == "-1") {
			setText("내 공유 목록");
		} else if (seller !== null) {
			setText(seller);
		} else {
			setText("찜");
		}
	}, []);

	return (
		<>
			<PageLayout>
				<H2Box>{text}</H2Box>
				<ListFilter />
				<ItemList
					catNum={category}
					catText={catText}
					searchKey={searchKey}
					seller={seller}
					type={text}
				></ItemList>
			</PageLayout>
			<Footer />
		</>
	);
}

export default ListPage;
