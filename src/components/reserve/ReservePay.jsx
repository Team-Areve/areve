import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import { FlexBetween } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function ReservePay(props) {
	return (
		<ReserveInfoPayBox>
			<ReservePayItemLayout>
				<ReserveItemTitle>날짜</ReserveItemTitle>
				<ReserveItem>{props.startDate}</ReserveItem>
				<ReserveItem>{props.endDate}</ReserveItem>
			</ReservePayItemLayout>
			<ReservePayItemLayout>
				<ReserveItemTitle>가격</ReserveItemTitle>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<ReserveItem>
						{props.price} X {props.timeDiff}
						{props.perHour ? "시간" : "일"}
					</ReserveItem>
					<ReserveItem style={{ color: "#6667ab" }}>
						{props.resultPrice}원
					</ReserveItem>
				</div>
			</ReservePayItemLayout>
			<ReservePayButton variant="primary" width="410px" height="70px" onClick={props.onReserve}>
				예약하기
			</ReservePayButton>
		</ReserveInfoPayBox>
	);
}

const ReserveInfoPayBox = styled.div`
	position: fixed;
	top: 220px;
	width: 450px;
	height: 300px;
	margin-top: 50px;
	border: 1px solid ${palette.MainColor};
	border-radius: 10px;
	z-index: 50;
`;

const ReservePayItemLayout = styled.div`
	margin: 20px 20px 20px 20px;
`;

const ReserveItemTitle = styled.div`
	font-size: 15px;
	margin-bottom: 10px;
`;
const ReserveItem = styled.div`
	font-size: 25px;
	margin-bottom: 10px;
`;

const ReservePayButton = styled(Button)`
	margin-left: 20px;
`;

export default ReservePay;
