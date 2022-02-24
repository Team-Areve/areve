import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "lib/Request";
import { categoryList } from "lib/categoryList";

function ItemList(props) {
	const [itemLists, setItemLists] = useState([]);
	const [isLoaded, setLoading] = useState(false);
	const [target, setTarget] = useState(null);
	let page = 0;

	const getMoreItem = async () => {
		setLoading(true);

		let url = "";
		if (props.catNum == -1) {
			url = `/item/${page}/search?q=${props.searchKey}`;
		} else {
			url = `/category/${props.catNum}/page/${page}`;
		}
		await instance({
			method: "get",
			url: url,
		}).then((res) => {
			setItemLists([...itemLists, ...res.data]);
			page += 1;
			setLoading(false);
		});
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
				return (
					<Vertical
						key={v.itemnumber}
						item={v}
						cat={categoryList[v.category].text}
					/>
				);
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
	justify-content: space-around;
`;

export default ItemList;
