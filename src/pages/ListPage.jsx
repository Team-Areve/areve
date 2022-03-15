import H2Box from "components/common/H2Box";
import ItemList from "components/list/ItemList";
import ListFilter from "components/list/ListFilter";
import { PageLayout } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import { categoryList } from "lib/categoryList";
import { useSearchParams } from "react-router-dom";
import instance from "lib/Request";

function ListPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchKey = searchParams.get("q");
	const category = searchParams.get("category");
	const seller = searchParams.get("seller");

	const [location, setLocation] = useState(searchParams.get("location"));
	const [end, setEnd] = useState(searchParams.get("end"));
	const [lower, setLower] = useState(searchParams.get("lower"));
	const [upper, setUpper] = useState(searchParams.get("upper"));
	const [start, setStart] = useState(searchParams.get("start"));
	const [order, setOrder] = useState(
		searchParams.get("order") ? searchParams.get("order") : 0
	);
	const [title, setTitle] = useState("");
	console.log(category);

	useEffect(() => {
		// 추후 실제 주소 값을 검색할 때 사용
		// if (localStorage.getItem("sigungu") && location === null) {
		// 	setLocation(localStorage.getItem("sigungu"));
		// }

		if (searchKey !== null) {
			setTitle(searchKey);
		} else if (category !== null) {
			setTitle(categoryList[category].text);
		} else if (seller == "-1") {
			setTitle("내 공유 목록");
		} else if (seller !== null) {
			setTitle(seller);
		} else {
			setTitle("찜");
		}
	}, []);

	return title !== "" ? (
		<PageLayout>
			<H2Box>{title}</H2Box>
			<ListFilter
				getLocation={(v) => setLocation(v)}
				getStart={(v) => setStart(v)}
				getEnd={(v) => setEnd(v)}
				getLower={(v) => setLower(v)}
				getUpper={(v) => setUpper(v)}
				getOrder={(v) => setOrder(v)}
				location={location}
				start={start}
				end={end}
				lower={lower}
				upper={upper}
				order={order}
			/>
			<ItemList
				searchKey={searchKey}
				catNum={category}
				seller={seller}
				location={location}
				start={start}
				end={end}
				lower={lower}
				upper={upper}
				order={order}
			></ItemList>
		</PageLayout>
	) : (
		<></>
	);
}

export default ListPage;
