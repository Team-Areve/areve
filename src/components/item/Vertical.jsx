import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers/CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";
import { Link } from "react-router-dom";
import ImageViewer from "./viewers/ImageViewer.jsx";

function Vertical({ cat, item, large = true, link = true }) {
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
	} = item;

	let images = [image1, image2, image3, image4, image5, image6, image7, image8];
	for (let i = 0; i < cntImg; i++) {
		let format = images[i].slice(-3);
		if (format === "png") {
			images[i] = "data:image/png;base64," + images[i].slice(0, -3);
		} else {
			images[i] = "data:image/jpeg;base64," + images[i].slice(0, -4);
		}
	}

	const style = large
		? {
				width: "384px",
				height: "350px",
				imgHeight: "216px",
				infoHeight: "140px",
				titleHeight: "44px",
		  }
		: {
				width: "352px",
				height: "330px",
				imgHeight: "189px",
				infoHeight: "111px",
				titleHeight: "25px",
		  };

	return (
		<VerticalContainer width={style.width} height={style.height}>
			<ImageViewer
				itemnumber={itemnumber}
				images={images}
				cntImg={cntImg}
				width={style.width}
				height={style.imgHeight}
				isVertical={true}
				link={link}
			></ImageViewer>
			<Link to={link ? `/item/${itemnumber}` : ""}>
				<VerticalInfo width={style.width} height={style.infoHeight}>
					<CategoryLine>
						<CategoryViewer text={cat} isSmall={true}></CategoryViewer>
						<CategoryViewer text={sigungu} isSmall={true}></CategoryViewer>
					</CategoryLine>
					<Title width={style.width} height={style.titleHeight}>
						{title}
					</Title>
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
			</Link>
		</VerticalContainer>
	);
}

const VerticalContainer = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: flex;
	flex-direction: column;
	margin-bottom: 48px;
`;

const VerticalInfo = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	box-sizing: border-box;
	border-radius: 0px 0px 10px 10px;
	border: 1px solid ${palette.MainColor};
	margin-top: -5px;
`;

const CategoryLine = styled.div`
	margin-top: 10px;
	display: flex;
`;

const Title = styled.div`
	margin: 10px 0 0 10px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
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
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export default Vertical;
