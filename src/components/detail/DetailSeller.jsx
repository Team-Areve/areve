import Button from "components/common/Button";
import OtherProfile from "components/profile/OtherProfile";
import {
	DetailContainer,
	FlexAlignCenter,
	FlexRow,
} from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";
import DetailH3 from "./DetailH3";

function DetailSeller(props) {
	const [showModal, setShowModal] = useState(false);
	return (
		<DetailContainer>
			<DetailH3>판매자 정보</DetailH3>
			<DetailSellerInner onClick={() => setShowModal(true)}>
				<DetailSellerNickname>{props.seller}</DetailSellerNickname>
				<Button variant="primary" width="150px" height="50px">
					채팅하기
				</Button>
			</DetailSellerInner>
			{showModal ? (
				<OtherProfile
					isModal={showModal}
					onToggle={() => setShowModal(!showModal)}
				/>
			) : (
				<></>
			)}
		</DetailContainer>
	);
}

const DetailSellerInner = styled.div`
	${FlexRow}
	justify-content : space-between;
	align-items: center;
	margin-top: 20px;
`;

const DetailSellerNickname = styled.span`
	${FlexRow}
	${FlexAlignCenter}
  margin-left: 35px;
	font-size: 25px;
`;

export default DetailSeller;
