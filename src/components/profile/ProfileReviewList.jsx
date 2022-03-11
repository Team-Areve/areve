import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "lib/Request";
import ProfileReviewListItem from "./ProfileReviewListItem";

function ProfileReviewList() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		instance.defaults.headers.common[
			"Authorization"
		] = `Token ${localStorage.getItem("token")}`;
		instance({ method: "get", url: "item/ordered" }).then((res) => {
			setItems([...res.data]);
		});
	}, []);

	return (
		<Layout>
			{items.map((v, i) => {
				return <ProfileReviewListItem key={`OrderedItem_${i}`} item={v} />;
			})}
		</Layout>
	);
}

const Layout = styled.div`
	width: 700px;
	padding-bottom: 100px;
	margin-top: 20px;
`;

export default ProfileReviewList;
