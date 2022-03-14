import Vertical from "components/item/Vertical";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "lib/Request";
import { categoryList } from "lib/categoryList";

function ItemList({
	searchKey,
	catNum,
	seller,
	location,
	start,
	end,
	lower,
	upper,
	order,
}) {
	const [itemLists, setItemLists] = useState([]);
	const [isLoaded, setLoading] = useState(false);
	const [target, setTarget] = useState(null);
	let clear = false;
	let page = 0;
	let liked = localStorage.getItem("like");

	console.log(
		searchKey,
		catNum,
		seller,
		location,
		start,
		end,
		lower,
		upper,
		order
	);

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

	useEffect(() => {
		page = 0;
		setItemLists([]);
		setLoading(false);
		clear = true;
		getMoreItem();
	}, [location, start, end, lower, upper, order]);

	const getMoreItem = async () => {
		setLoading(true);
		console.log(true);
		let url = `/item/${page}/search?order=${order}`;
		if (searchKey !== null) {
			url += `&q=${searchKey}`;
		} else if (catNum !== null) {
			url += `&category=${catNum}`;
		} else if (seller !== null) {
			url += `&seller=${seller}`;
		} else {
			url = `/item/liked/${page}?order=${order}`;
		}

		if (location) {
			url += `&location=${location}`;
		}
		if (start) {
			url += `&start=${start}`;
		}
		if (end) {
			url += `&end=${end}`;
		}
		if (lower) {
			url += `&lower=${lower}`;
		}
		if (upper) {
			url += `&upper=${upper}`;
		}

		await instance({
			method: "get",
			url: url,
		}).then((res) => {
			console.log(clear);
			if (clear) {
				console.log(clear, 1);
				setItemLists(res.data);
				clear = false;
			} else {
				setItemLists([...itemLists, ...res.data]);
			}
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
							liked !== null && liked.includes(v.itemnumber.toLocaleString())
								? true
								: false
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
