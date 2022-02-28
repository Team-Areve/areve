import { Star } from "assets/icons";
import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import {
	FlexAlignCenter,
	FlexBetween,
	FlexColumn,
	FlexJustifyCenter,
} from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";
import DetailDateInput from "./DetailDateInput";

function DetailReserve() {
	return (
		<DetailReserveContainer>
			<DetailReserveWrapper>
				<DetailReservePrice>175,370원/일</DetailReservePrice>
				<DetailReserveRate>
					<Star width="20px" height="20px" fill="orange" />
					4.89
				</DetailReserveRate>
				<DetailReserveReview>후기 99+</DetailReserveReview>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<DetailDateInputBlock>
					<DetailDateInput />
				</DetailDateInputBlock>
			</DetailReserveWrapper>
			<DetailReserveWrapper>
				<DetailReserveCalculate>175,370원/일 X 0일</DetailReserveCalculate>
				<DetailReserveTotal>1,753,750원</DetailReserveTotal>
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
`;

const DetailReserveRate = styled.div`
	margin-left: 92px;
`;
const DetailReserveReview = styled.span`
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
