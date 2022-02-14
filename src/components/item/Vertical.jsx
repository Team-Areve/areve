import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers/CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";

function Vertical(props) {
	const cat = props.cat;
	let isSmall = false;
	let {
		itemnumber,
		title,
		cntImg,
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		location,
		sigungu,
		price,
		pricePerHour,
		rate,
		reviews,
		like,
	} = props.item;
	image1 = "data:image/png;base64," + image1;
	console.log(image1);
	return (
		<VerticalContainer>
			<a>
				<VerticalImage src={image1}></VerticalImage>
				<VerticalInfo>
					<CategoryLine>
						<CategoryViewer text={cat} isSmall={true}></CategoryViewer>
						<CategoryViewer text={sigungu} isSmall={true}></CategoryViewer>
					</CategoryLine>
					<Title>{title}</Title>
					<BottomLine>
						<PriceViewer
							isSmall={isSmall}
							price={price}
							perHour={pricePerHour}
						></PriceViewer>
						<RateReviewLike>
							<RatingViewer isSmall={isSmall} rating={rate}></RatingViewer>
							<ReviewViewer isSmall={isSmall} review={reviews}></ReviewViewer>
							<LikeViewer isSmall={isSmall} like={like}></LikeViewer>
						</RateReviewLike>
					</BottomLine>
				</VerticalInfo>
			</a>
		</VerticalContainer>
	);
}

const VerticalContainer = styled.div`
	width: 384px;
	height: 350px;
	display: flex;
	flex-direction: column;
	margin-bottom: 48px;
`;

const VerticalImage = styled.img`
	width: 384px;
	height: 216px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
`;

const VerticalInfo = styled.div`
	width: 384px;
	height: 140px;
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
	width: 384px;
	height: 44px;
	font-size: 20px;
`;

const BottomLine = styled.div`
	margin: 10px 10px 0 10px;
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

export default Vertical;
