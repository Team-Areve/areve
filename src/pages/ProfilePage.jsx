import React, { useEffect, useState } from "react";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ProfileInfo from "components/profile/ProfileInfo";
import instance from "lib/Request";
import { Navigate } from "react-router-dom";
import ProfileFavoriteList from "components/profile/ProfileFavoriteList";
import styled from "styled-components";
import ProfileReviewList from "components/profile/ProfileReviewList";
import ProfileAppliedList from "components/profile/ProfileAppliedList";

function ProfilePage() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

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
			localStorage.setItem("token", token);
			instance.defaults.headers.common["Authorization"] = token
				? `Token ${token}`
				: null;
			alert("비밀번호가 변경되었습니다");
		});
	};

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
				<ListLayout>
					<ProfileFavoriteList />
					<ProfileAppliedList />
				</ListLayout>
			</InfoLayout>
			<H2Box style={{ marginTop: "70px" }}>예약 내역 및 리뷰 작성하기</H2Box>
			<ProfileReviewList />
		</PageLayout>
	);
}

const InfoLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Border = styled.div`
	width: 1px;
	height: 850px;
	margin-top: 70px;
	background-color: #cbcbcb;
`;

const ListLayout = styled.div`
	width: 500px;
`;

export default ProfilePage;
