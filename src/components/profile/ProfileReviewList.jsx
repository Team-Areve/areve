import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "lib/Request";
import ProfileReviewListItem from "./ProfileReviewListItem";

function ProfileReviewList() {
	const [items, setItems] = useState([]);
	let liked = localStorage.getItem("like");

	useEffect(() => {
		instance.defaults.headers.common[
			"Authorization"
		] = `Token ${localStorage.getItem("token")}`;
		instance({ method: "get", url: "item/ordered" }).then((res) => {
			setItems([...res.data]);
		});
		if (liked === null) {
			return;
		}
		liked = liked.split(" ");
	}, []);

	return (
		<Layout>
			{items.map((v, i) => {
				return v[1].reviewWritten ? (
					<></>
				) : (
					<ProfileReviewListItem
						key={`OrderedItem_${v[1].ordernumber}`}
						item={v[0]}
						order={v[1]}
						isLiked={
							liked.includes(v[0].itemnumber.toLocaleString()) ? true : false
						}
					/>
				);
			})}
		</Layout>
	);
}

const Layout = styled.div`
	width: 1250px;
	padding-bottom: 100px;
	margin-top: 20px;
`;

export default ProfileReviewList;
