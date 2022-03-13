import Horizontal from "components/item/Horizontal";
import instance from "lib/Request";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

function ProfileAppliedList() {
	const navigate = useNavigate();
	const [items, setItems] = useState([]);
	let liked = localStorage.getItem("like");

	useEffect(() => {
		if (localStorage.getItem("token")) {
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
		}
		instance({
			method: "get",
			url: `/item/applied/0`,
		})
			.then((res) => {
				setItems(res.data);
			})
			.catch(setItems([]));
		if (liked === null) {
			return;
		}
		liked = liked.split(" ");
	}, []);

	return (
		<Aside>
			<AsideTitle>내 공유목록</AsideTitle>
			{items.map((v, i) => {
				if (1 < i) {
					return;
				}
				return (
					<Horizontal
						key={`ItemLiked_${i}`}
						item={v}
						large={false}
						isLiked={
							liked.includes(v.itemnumber.toLocaleString()) ? true : false
						}
					/>
				);
			})}
			{items.length !== 0 ? (
				<Button
					variant="secondary"
					width="500px"
					height="50px"
					onClick={() => {
						navigate("/search?seller=-1");
					}}
				>
					더 보기
				</Button>
			) : (
				<NothingToShow>공유하신 물건이 없네요...</NothingToShow>
			)}
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

const NothingToShow = styled.div`
	width: 500px;
	height: 50px;
	font-size: 25px;
	line-height: 50px;
	text-align: center;
	vertical-align: middle;
`;

export default ProfileAppliedList;
