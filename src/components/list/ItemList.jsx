import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import axios from "axios";

function ItemList(props) {
	const server = "localhost:8000";
	// const [target, setTarget] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);
	// const [itemLists, setItemLists] = useState([]);
	// const [page, setPage] = useState(0);

	// useEffect(() => {
	// 	console.log(itemLists);
	// }, [itemLists]);

	// const getMoreItem = async () => {
	// 	setIsLoaded(true);
	// 	await new Promise((resolve) => setTimeout(resolve, 1500));
	// 	await axios
	// 		.get(`${server}/category/${props.catNum}/page/${page}`)
	// 		.then((res) => {
	// 			console.log(res);
	// 			setItemLists((itemLists) => itemLists.concat(res));
	// 		});
	// 	setPage((pre) => pre + 1);
	// 	setIsLoaded(false);
	// };

	// const onIntersect = async ([entry], observer) => {
	// 	if (entry.isIntersecting && !isLoaded) {
	// 		observer.unobserve(entry.target);
	// 		await getMoreItem();
	// 		observer.observe(entry.target);
	// 	}
	// };

	// useEffect(() => {
	// 	let observer;
	// 	if (target) {
	// 		observer = new IntersectionObserver(onIntersect, {
	// 			threshold: 0.4,
	// 		});
	// 		observer.observe(target);
	// 	}
	// 	return () => observer && observer.disconnect();
	// }, [target]);

	let itemLists = [
		{
			itemnumber: 3,
			title: "테스트 중입니다.",
			content: "테스트<br />테스트 테스트",
			cntImg: 3,
			image1: "a",
			image2: "b",
			image3: "c",
			image4: "",
			image5: "",
			image6: "",
			image7: "",
			image8: "",
			location: "경기도 안산시 단원구 초지1로 78 2001-1004",
			postcode: "15454",
			price: 1000,
			pricePerHour: true,
			rate: 0.0,
			reviews: 0,
			like: 0,
		},
		{
			itemnumber: 4,
			title: "Test Cat3 - 2",
			content: "카테고리 3번 테스트 아이템 2",
			cntImg: 3,
			image1: "a",
			image2: "b",
			image3: "c",
			image4: "d",
			image5: "",
			image6: "",
			image7: "",
			image8: "",
			location: "경기도 안산시 단원구 초지1로 76 1003-102",
			postcode: "13232",
			price: 2000,
			pricePerHour: true,
			rate: 0.0,
			reviews: 0,
			like: 0,
		},
		{
			itemnumber: 5,
			title: "Test Cat3 - 3",
			content: "카테고리 3번 테스트 아이템 3",
			cntImg: 3,
			image1: "a",
			image2: "b",
			image3: "c",
			image4: "d",
			image5: "a",
			image6: "a",
			image7: "a",
			image8: "",
			location: "경기도 안산시 단원구 초지1로 76 1003-1103",
			postcode: "13232",
			price: 5000,
			pricePerHour: false,
			rate: 0.0,
			reviews: 0,
			like: 0,
		},
		{
			itemnumber: 6,
			title: "Test Cat3 - 4",
			content: "카테고리 3번 테스트 아이템 4",
			cntImg: 3,
			image1: "a",
			image2: "b",
			image3: "c",
			image4: "d",
			image5: "a",
			image6: "a",
			image7: "a",
			image8: "",
			location: "경기도 안산시 단원구 초지1로 76 1103-1103",
			postcode: "13232",
			price: 5000,
			pricePerHour: false,
			rate: 0.0,
			reviews: 0,
			like: 0,
		},
	];

	return (
		<ItemListContainer>
			{itemLists.map((v, i) => {
				return <Vertical key={v.itemnumber} item={v} cat={props.cat} />;
			})}
			{/* <div ref={setTarget} className="Target-Element">
				{isLoaded && <Loader />}
			</div> */}
		</ItemListContainer>
	);
}

const ItemListContainer = styled.section`
	margin: 30px auto;
	width: 1250px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export default ItemList;
