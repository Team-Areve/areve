import React from "react";
import H3Box from "components/common/H3Box";
import Input from "components/common/Input";
import styled from "styled-components";
import Button from "components/common/Button";

function ProfileInfo({
	user,
	setPassword,
	setPasswordConfirm,
	onPasswordChange,
}) {
	return (
		<InfoLayout>
			<H3Box variant="h3*" star={false} name="닉네임" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.nickname}
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="비밀번호" width="650px">
				<Input
					width="400px"
					height=" 50px"
					name="title"
					onChange={(e) => setPassword(e.target.value)}
					isFocus
					type="password"
				/>
			</H3Box>
			<H3Box variant="h3*" star={false} name="비밀번호　　확인" width="650px">
				<Input
					width="400px"
					height=" 50px"
					name="title"
					onChange={(e) => setPasswordConfirm(e.target.value)}
					type="password"
				/>
				<Button
					variant="primary"
					width="80px"
					height="50px"
					style={{ marginLeft: "20px", fontSize: "20px" }}
					onClick={onPasswordChange}
				>
					변경
				</Button>
			</H3Box>
			<H3Box variant="h3*" star={false} name="이메일" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.email}
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="이름" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.name}
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="생년월일" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.birth}
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="휴대전화" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.phonenumber}
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="지역" width="650px">
				<ReadOnlyValue
					width="400px"
					height="50px"
					style={user.location === "" ? { marginRight: "20px" } : {}}
				>
					{user.location}
					<Button
						variant="primary"
						width="80px"
						height="50px"
						style={{ fontSize: "20px" }}
					>
						편집
					</Button>
				</ReadOnlyValue>
			</H3Box>
			<H3Box variant="h3*" star={false} name="가입일자" width="650px">
				<ReadOnlyValue width="500px" height="50px">
					{user.joindate}
				</ReadOnlyValue>
			</H3Box>
		</InfoLayout>
	);
}

const InfoLayout = styled.div`
	width: 650px;
`;

const ReadOnlyValue = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	line-height: ${(props) => props.height};
	vertical-align: middle;
	font-size: 20px;
`;

export default ProfileInfo;
