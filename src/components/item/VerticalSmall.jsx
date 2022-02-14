import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers/CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";

function VerticalSmall(props) {
	var cat = "스튜디오";
	var loc = "동교동";
	var title = "20글자20글자20글자20글자20글자";
	var price = "4000원/시간";
	var rating = "4.87";
	var review = "99+";
	var like = "99+";
	var isSmall = false;
	return (
		<VerticalContainer>
			<a>
				<VerticalImage></VerticalImage>
				<VerticalInfo>
					<CategoryLine>
						<CategoryViewer text={cat} isSmall={true}></CategoryViewer>
						<CategoryViewer text={loc} isSmall={true}></CategoryViewer>
					</CategoryLine>
					<Title>{title}</Title>
					<BottomLine>
						<PriceViewer isSmall={isSmall} price={price}></PriceViewer>
						<RateReviewLike>
							<RatingViewer isSmall={isSmall} rating={rating}></RatingViewer>
							<ReviewViewer isSmall={isSmall} review={review}></ReviewViewer>
							<LikeViewer isSmall={isSmall} like={like}></LikeViewer>
						</RateReviewLike>
					</BottomLine>
				</VerticalInfo>
			</a>
		</VerticalContainer>
	);
}

const VerticalContainer = styled.div`
	width: 352px;
	height: 330px;
	display: flex;
	flex-direction: column;
`;

const VerticalImage = styled.div`
	width: 352px;
	height: 189px;
	background-color: black;
	border-radius: 10px 10px 0 0;
`;

const VerticalInfo = styled.div`
	width: 352px;
	height: 111px;
	box-sizing: border-box;
	border-radius: 0px 0px 10px 10px;
	border: 1px solid ${palette.MainColor};
`;

const CategoryLine = styled.div`
	margin-top: 10px;
	display: flex;
`;

const Title = styled.div`
	margin: 10px 0 0 10px;
	width: 352px;
	height: 31px;
	font-size: 20px;
`;

const BottomLine = styled.div`
	margin: 0 10px 0 10px;
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const RateReviewLike = styled.div`
	width: 198px;
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export default VerticalSmall;
