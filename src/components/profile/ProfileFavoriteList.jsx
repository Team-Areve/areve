import Horizontal from "components/item/Horizontal";
import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ProfileFavoriteList() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
		}
		instance({
			method: "get",
			url: `/item/main/0`,
		})
			.then((res) => {
				console.log(res);
				if (res.data.itemnumber) {
					setItems([res.data]);
					return;
				}
				setItems([...res.data]);
			})
			.catch(setItems([]));
	}, []);

	return (
		<Aside>
			<AsideTitle>찜</AsideTitle>
			{items.map((v, i) => {
				return (
					<Horizontal
						key={`ItemLiked_${i}`}
						item={v}
						large={false}
					></Horizontal>
				);
			})}
		</Aside>
	);
}

const Aside = styled.div`
	width: 500px;
	display: inline-block;
	padding-top: 20px;
`;

const AsideTitle = styled.div`
	font-size: 25px;
	color: #6667ab;
	margin-bottom: 10px;
`;

export default ProfileFavoriteList;
