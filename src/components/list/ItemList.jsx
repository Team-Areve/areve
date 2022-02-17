import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "lib/Request";

function ItemList(props) {
	const [itemLists, setItemLists] = useState([]);
	const [isLoaded, setLoading] = useState(false);
	const [target, setTarget] = useState(null);
	let page = 0;

	const getMoreItem = async () => {
		setLoading(true);
		await instance({
			method: "get",
			url: `/category/${props.catNum}/page/${page}`,
		}).then((res) => {
			if (res.status === 404) {
				return;
			}
			setItemLists([...itemLists, ...res.data]);
			page += 1;
		});
		setLoading(false);
	};

	const onIntersect = async ([entry], observer) => {
		if (entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target);
			await getMoreItem();
			observer.observe(entry.target);
		}
	};

	useEffect(() => {
		let observer;
		if (target) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0.4,
			});
			observer.observe(target);
		}
		return () => observer && observer.disconnect();
	}, [target]);

	return (
		<ItemListContainer>
			{itemLists.map((v, i) => {
				return <Vertical key={v.itemnumber} item={v} cat={props.cat} />;
			})}
			<div
				ref={setTarget}
				className="Target-Element"
				style={{ width: "1250px" }}
			></div>
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
