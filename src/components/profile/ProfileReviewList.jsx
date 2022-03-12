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
			console.log(res.data);
		});
	}, []);

	return (
		<Layout>
			{items.map((v, i) => {
				return v[1].reviewWritten ? (
					<></>
				) : (
					<ProfileReviewListItem
						key={`OrderedItem_${i}`}
						item={v[0]}
						order={v[1]}
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
