import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { Close } from "assets/icons";

const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
	const handlePostCode = (data) => {
		let fullAddress = data.address;
		let extraAddress = "";

		if (data.addressType === "R") {
			if (data.bname !== "") {
				extraAddress += data.bname;
			}
			if (data.buildingName !== "") {
				extraAddress +=
					extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
		}
		//console.log(fullAddress);
		//console.log(data.zonecode);
		props.getLoc(fullAddress);
		props.getPost(data.zonecode);
		props.onClose();
	};

	const postCodeStyle = {
		display: "block",
		position: "absolute",
		width: "600px",
		height: "600px",
		border: "1px solid #cbcbcb",
		borderTop: "0px",
		boxSizing: "border-box",
		marginLeft: "-1px",
	};

	return (
		<Popup>
			<CloseBtn
				onClick={() => {
					props.onClose();
				}}
			>
				<Close width="30px" height="30px"></Close>
			</CloseBtn>
			<DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
		</Popup>
	);
};

const Popup = styled.div`
	border: 1px solid #cbcbcb;
	border-bottom: 0px;
	width: 600px;
	box-sizing: border-box;
	background-color: #ececec;
`;

const CloseBtn = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 550px;
`;

export default PopupPostCode;
