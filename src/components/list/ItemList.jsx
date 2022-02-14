import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import axios from "axios";

function ItemList(props) {
	const server = "https://fathomless-plains-30211.herokuapp.com/";

	const [itemLists, setItemLists] = useState([]);

	const getMoreItem = async () => {
		await axios.get(`${server}category/${props.catNum}/page/0`).then((res) => {
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
