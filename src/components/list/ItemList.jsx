import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import axios from "axios";
import instance from "lib/Request";

function ItemList(props) {
	const [itemLists, setItemLists] = useState([]);
	const req = instance;

	const getMoreItem = async () => {
		await instance({
			method: "get",
			url: `/category/${props.catNum}/page/0`,
		}).then((res) => {
			setItemLists([...itemLists, ...res.data]);
		});
	};

	useEffect(() => {
		getMoreItem();
	}, []);

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
