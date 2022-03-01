import { ReviewIcon, Star } from "assets/icons";
import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import {
	FlexAlignCenter,
	FlexBetween,
	FlexColumn,
	FlexJustifyCenter,
} from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";
import DetailDateInput from "./DetailDateInput";

function DetailReserve({ price, pricePerHour, rate, reviews }) {
	const [startDate, setstartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [resultPrice, setResultPrice] = useState(0);

	return (
		<DetailReserveContainer>
			<DetailReserveWrapper>
				<DetailReservePrice>
					{price}
					{pricePerHour ? "원/시간" : "원/일"}
				</DetailReservePrice>
				<DetailReserveRate>
					<Star width="20px" height="20px" fill="orange" />
					{rate}
				</DetailReserveRate>
				<DetailReserveReview>
					<ReviewIcon width="20px" height="20px" fill={palette.MainColor} />{" "}
					{reviews}
				</DetailReserveReview>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<DetailDateInputBlock>
					<DetailDateInput />
				</DetailDateInputBlock>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<DetailReserveCalculate>
					{price}
					{pricePerHour ? "원/시간" : "원/일"} X 0일
				</DetailReserveCalculate>
				<DetailReserveTotal>{resultPrice}원</DetailReserveTotal>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<DetailReserveBtnBlock>
					<Button variant="secondary" width="130px" height="70px">
						좋아요
					</Button>
					<Button variant="secondary" width="130px" height="70px">
						채팅
					</Button>
					<Button variant="secondary" width="130px" height="70px">
						공유
					</Button>
				</DetailReserveBtnBlock>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<Button variant="primary" width="410px" height="70px">
					예약하기
				</Button>
			</DetailReserveWrapper>
		</DetailReserveContainer>
	);
}

const DetailReserveContainer = styled.section`
	position: fixed;
	width: 450px;
	height: 500px;
	margin-top: 50px;
	border: 1px solid ${palette.MainColor};
	border-radius: 10px;
`;

const DetailReserveWrapper = styled.div`
	margin-top: 30px;
	${FlexJustifyCenter}
`;

const DetailReservePrice = styled.span`
	font-size: 25px;
	color: ${palette.MainColor};
`;

const DetailReserveRate = styled.div`
	${FlexAlignCenter}
	margin-left: 92px;
`;
const DetailReserveReview = styled.div`
	${FlexAlignCenter}
	margin-left : 12px;
`;

const DetailDateInputBlock = styled.div`
	${FlexColumn}
	height : 120px;
	justify-content: space-between;
`;

const DetailReserveCalculate = styled.span``;

const DetailReserveTotal = styled.span`
	margin-left: 100px;
`;

const DetailReserveBtnBlock = styled.div`
	width: 410px;
	${FlexBetween};
`;

export default DetailReserve;
