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
	let liked = localStorage.getItem("like");

	useEffect(() => {
		if (liked === null) {
			return;
		}
		liked = liked.split(" ");
		if (localStorage.getItem("token")) {
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
		}
	}, []);

	const getMoreItem = async () => {
		setLoading(true);

		let url = "";
		if (props.searchKey !== null) {
			url = `/item/${page}/search?q=${props.searchKey}`;
		} else if (props.catNum !== null) {
			url = `/category/${props.catNum}/page/${page}`;
		} else if (props.seller == -1) {
			url = `item/applied/${page}`;
		} else if (props.seller !== null) {
			url = `item/applied${props.seller}/${page}`;
		} else {
			url = `item/liked/${page}`;
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
						isLiked={
							liked.includes(v.itemnumber.toLocaleString()) ? true : false
						}
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
