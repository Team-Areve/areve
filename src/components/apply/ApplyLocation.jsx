import Button from "components/common/Button";
import H3Box from "components/common/H3Box";
import Input from "components/common/Input";
import PopupDom from "lib/api/location/PopupDom";
import PopupPostCode from "lib/api/location/PopupPostCode";
import { FlexBetween } from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";

function ApplyLocation(props) {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [location, setLocation] = useState("");
	const [postcode, setPostcode] = useState("");

	const openPopup = () => {
		setIsPopupOpen(true);
	};
	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const getDefaultLocation = () => {
		location = "";
	};

	const getLoc = (value) => {
		props.getLocation(value);
		setLocation(value);
		console.log(value);
	};
	const onDetailLocHandler = (e) => {
		props.getDetailLoc(e.target.value);
	};
	const getPost = (value) => {
		props.getPostcode(value);
		setPostcode(value);
		console.log(value);
	};

	return (
		<H3Box variant="h3*" name="위치">
			<ApplyLocationInner>
				<ApplyLocationButtonBox>
					<Button
						width="200px"
						height="50px"
						variant="secondary"
						onClick={getDefaultLocation}
					>
						설정된 위치
					</Button>
					<Button
						width="200px"
						height="50px"
						variant="secondary"
						onClick={openPopup}
					>
						주소 검색
					</Button>
				</ApplyLocationButtonBox>
				<div id="popupDom">
					{isPopupOpen && (
						<PopupDom>
							<PopupPostCode
								onClose={closePopup}
								getLoc={getLoc}
								getPost={getPost}
							/>
						</PopupDom>
					)}
				</div>
				<PostalCode>{postcode}</PostalCode>
				<Loc>{location}</Loc>
				<Input
					width="1080px"
					height="50px"
					placeholder="상세 주소"
					onChange={onDetailLocHandler}
				></Input>
			</ApplyLocationInner>
		</H3Box>
	);
}

const ApplyLocationInner = styled.div`
	display: flex;
	flex-direction: column;

	input {
		margin-top: 10px;
	}
`;

const PostalCode = styled.div`
	width: 200px;
	height: 50px;
	border: 1px solid #6667ab;
	background-color: #ececec;
	border-radius: 4px;
	font-size: 20px;
	padding-left: 10px;
	line-height: 50px;
	vertical-align: middle;
	margin-bottom: 10px;
`;

const Loc = styled.div`
	width: 1080px;
	height: 50px;
	border: 1px solid #6667ab;
	background-color: #ececec;
	border-radius: 4px;
	font-size: 20px;
	padding-left: 10px;
	line-height: 50px;
	vertical-align: middle;
`;

const ApplyLocationButtonBox = styled.div`
	${FlexBetween}
	width : 420px;
	margin-bottom: 10px;
`;
export default ApplyLocation;
