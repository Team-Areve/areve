import React, { useEffect, useState } from "react";
import {
	FlexBetween,
	FlexJustifyCenter,
	PageLayout,
} from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ProfileInfo from "components/profile/ProfileInfo";
import instance from "lib/Request";
import { Navigate } from "react-router-dom";
import ProfileFavoriteList from "components/profile/ProfileFavoriteList";
import styled from "styled-components";

function ProfilePage() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const onPasswordChange = () => {
		if (password !== passwordConfirm) {
			alert("비밀번호를 확인해주세요");
			return;
		}
		instance({
			method: "post",
			url: "/changePW/",
			data: { newPassword: password },
		}).then((res) => {
			const token = res.data.Token;
			console.log(token);
			localStorage.setItem("token", token);
			instance.defaults.headers.common["Authorization"] = token
				? `Token ${token}`
				: null;
			alert("비밀번호가 변경되었습니다");
		});
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
			instance({ method: "get", url: "user/token" }).then((res) => {
				setUser(res.data);
			});
		} else {
			Navigate("/");
		}
	}, []);

	return (
		<PageLayout>
			<H2Box>내 정보</H2Box>
			<InfoLayout>
				<ProfileInfo
					user={user}
					setPassword={(e) => setPassword(e)}
					setPasswordConfirm={(e) => setPasswordConfirm(e)}
					onPasswordChange={onPasswordChange}
				/>
				<Border />
				<ProfileFavoriteList />
			</InfoLayout>
		</PageLayout>
	);
}

const InfoLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Border = styled.div`
	width: 1px;
	height: 500px;
	margin-top: 70px;
	background-color: #cbcbcb;
`;

export default ProfilePage;
