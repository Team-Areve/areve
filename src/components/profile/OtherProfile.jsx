import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ModalTemplate from "components/common/ModalTemplate";

function OtherProfile({ isModal, onToggle }) {
	const Nickname = "other user";
	const Email = "admin@areve.com";
	const Birth = "2022.01.30";
	const isAdult = true;
	const Rating = "4.89";
	const Sharing = "15";
	const RegisterDate = "2022.01.30";

	return (
		<ModalTemplate
			isModal={isModal}
			onToggle={onToggle}
			width="600px"
			height="550px"
		>
			<div style={{ height: "50px", marginTop: "30%" }}></div>
			<Profile>
				<UserNickname>{Nickname}</UserNickname>
			</Profile>
			<Table>
				<tbody>
					<Tr>
						<TableName>이메일</TableName>
						<TableData>{Email}</TableData>
					</Tr>
					<Tr>
						<TableName>19+</TableName>
						<TableData>{isAdult ? "O" : "X"}</TableData>
					</Tr>
					<Tr>
						<TableName>평점</TableName>
						<TableData>
							<Link style={{ textAlign: "right" }} to="/">
								{Rating}
							</Link>
						</TableData>
					</Tr>
					<Tr>
						<TableName>공유 목록</TableName>
						<TableData>
							<Link style={{ textAlign: "right" }} to="/">
								{Sharing}
							</Link>
						</TableData>
					</Tr>
					<tr>
						<TableName>가입일자</TableName>
						<TableData>{RegisterDate}</TableData>
					</tr>
				</tbody>
			</Table>
		</ModalTemplate>
	);
}

const Profile = styled.div`
	width: 500px;
	height: 50px;
	border-bottom: 1px solid #cbcbcb;
	box-sizing: border-box;
	margin-left: 50px;
	line-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
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
