import { palette } from "lib/styles/palette";
import { DetailContainer, FlexJustifyCenter } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";
import DetailH3 from "./DetailH3";
import DetailReviewItem from "./DetailReviewItem";

function DetailReview(props) {
	return (
		<DetailReviewContainer>
			<DetailH3>후기</DetailH3>
			<DetailReviewRateWrapper>
				<DetailReivewRate>후기 {props.count}개</DetailReivewRate>
				<DetailReivewRate>평점 {props.rate}점</DetailReivewRate>
			</DetailReviewRateWrapper>
			<DetailReviewImg></DetailReviewImg>
			<DetailFilter>
				<DetailFilterCategory>평점순</DetailFilterCategory>
				<DetailFilterCategory>최신순</DetailFilterCategory>
				<DetailReviewItem></DetailReviewItem>
				<DetailReviewItem></DetailReviewItem>
			</DetailFilter>
		</DetailReviewContainer>
	);
}

const DetailReviewContainer = styled(DetailContainer)`
	border: none;
`;

const DetailReviewRateWrapper = styled.div`
	${FlexJustifyCenter}

	margin-top: 20px;
`;

const DetailReivewRate = styled.span`
	text-align: center;
	width: 300px;
	font-size: 25px;
`;

const DetailReviewImg = styled.div`
	height: 100px;
	background-color: gray;
	margin-top: 25px;
`;

const DetailFilter = styled.div`
	font-size: 22px;

	margin-top: 20px;
`;

const DetailFilterCategory = styled.span`
	display: inline-block;
	width: 100px;
	text-align: center;
	color: ${palette.grayLight};
`;
export default DetailReview;
