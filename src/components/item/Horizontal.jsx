import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers//CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";
import { Link } from "react-router-dom";
import { categoryList } from "lib/categoryList.js";
import ImageViewer from "./viewers/ImageViewer.jsx";

function Horizontal(props) {
	let isSmall = false;

	let {
		itemnumber,
		title,
		category,
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

	let images = [image1, image2, image3, image4, image5, image6, image7, image8];
	for (let i = 0; i < cntImg; i++) {
		let format = images[i].slice(-3);
		if (format === "png") {
			images[i] = "data:image/png;base64," + images[i].slice(0, -3);
		} else {
			images[i] = "data:image/jpeg;base64," + images[i].slice(0, -4);
		}
	}

	return (
		<HorizontalContainer>
			<Link to={""}>
				<ImageViewer
					images={images}
					cntImg={cntImg}
					width="592px"
					height="333px"
					isVertical={false}
				></ImageViewer>
				<HorizontalInfo>
					<CategoryLine>
						<CategoryViewer
							text={categoryList[category].text}
							isSmall={isSmall}
						></CategoryViewer>
						<CategoryViewer text={sigungu} isSmall={isSmall}></CategoryViewer>
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
				</HorizontalInfo>
			</Link>
		</HorizontalContainer>
	);
}

const HorizontalContainer = styled.div`
	width: 950px;
	height: 333px;
	margin-bottom: 20px;
	position: relative;
`;

const HorizontalInfo = styled.div`
	width: 358px;
	height: 333px;
	position: absolute;
	right: 0px;
	top: 0px;
	border-radius: 0px 10px 10px 0px;
	box-sizing: border-box;
	border: 1px solid ${palette.MainColor};
`;

const CategoryLine = styled.div`
	margin-top: 10px;
	display: flex;
`;

const Title = styled.div`
	margin: 20px 0 0 10px;
	width: 338px;
	height: 205px;
	font-size: 25px;
`;

const BottomLine = styled.div`
	margin: 20px 10px 0 10px;
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const RateReviewLike = styled.div`
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export default Horizontal;
