import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import { FlexBetween } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function ReservePay(props) {
	return (
		<ReserveInfoPayBox>
			<ReservePayPrice>
				<span>175,370원/일 X 0일</span>
				<span>1,753,750원</span>
			</ReservePayPrice>
			<ReservePayPrice>
				<span>175,370원/일 X 0일</span>
				<span>1,753,750원</span>
			</ReservePayPrice>
			<ReservePayButton variant="primary" width="410px" height="70px">
				예약하기
			</ReservePayButton>
		</ReserveInfoPayBox>
	);
}

const ReserveInfoPayBox = styled.div`
	position: fixed;
	top: 220px;
	width: 450px;
	height: 500px;
	margin-top: 50px;
	border: 1px solid ${palette.MainColor};
	border-radius: 10px;
	z-index: 50;
`;

const ReservePayPrice = styled.div`
	${FlexBetween}
	margin-bottom : 88px;
`;

const ReservePayButton = styled(Button)`
	margin-top: 48px;
`;

export default ReservePay;
