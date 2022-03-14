import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ModalTemplate from "components/common/ModalTemplate";
import instance from "lib/Request";

function OtherProfile({ isModal, onToggle, usernumber }) {
	const [user, setUser] = useState("");
	useEffect(() => {
		instance({ method: "get", url: `user/${usernumber}` }).then((res) => {
			setUser(res.data);
			console.log(res.data);
		});
	}, []);

	const isAdult = true;

	return (
		<ModalTemplate
			isModal={isModal}
			onToggle={onToggle}
			width="600px"
			height="500px"
		>
			<Profile>
				<UserNickname>{user.nickname}</UserNickname>
			</Profile>
			<Table>
				<tbody>
					<Tr>
						<TableName>이메일</TableName>
						<TableData>{user.email}</TableData>
					</Tr>
					<Tr>
						<TableName>지역</TableName>
						<TableData>{user.location}</TableData>
					</Tr>
					<Tr>
						<TableName>평점</TableName>
						<TableData>
							<Link
								style={{ textAlign: "right" }}
								to={`/${user.usernumber}/review`}
							>
								{user.rate}
							</Link>
						</TableData>
					</Tr>
					<Tr>
						<TableName>공유 목록</TableName>
						<TableData>
							<Link
								style={{ textAlign: "right" }}
								to={`/search?seller=${user.usernumber}`}
							>
								{user.numItemSharing}
							</Link>
						</TableData>
					</Tr>
					<tr>
						<TableName>가입일자</TableName>
						<TableData>{user.joindate}</TableData>
					</tr>
				</tbody>
			</Table>
		</ModalTemplate>
	);
}

const Profile = styled.div`
	width: 500px;
	height: 70px;
	border-bottom: 1px solid #cbcbcb;
	box-sizing: border-box;
	margin-left: 50px;
	line-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30%;
	padding-top: 30px;
`;

const UserNickname = styled.div`
	font-size: 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	display: inline;
	margin-bottom: 10px;
`;

const EditNickname = styled.button`
	height: 30px;
	width: 30px;
`;

const Input = styled.input`
	width: 200px;
	height: 30px;
	border: 1px solid #6667ab;
	box-sizing: border-box;
	font-size: 30px;
	display: inline;

	:focus {
		outline: none;
	}
`;

const Table = styled.table`
	margin: 30px auto;
	width: 450px;
	height: 360px;
`;

const Tr = styled.tr`
	border-bottom: 1px solid #cbcbcb;
	box-sizing: border-box;
`;

const TableName = styled.td`
	width: 150px;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	border-right: 1px solid #cbcbcb;
	box-sizing: border-box;
`;

const TableData = styled.td`
	width: 300px;
	height: 60px;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
`;

export default OtherProfile;
