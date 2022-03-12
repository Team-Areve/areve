import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers//CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";
import { categoryList } from "lib/categoryList.js";
import ImageViewer from "./viewers/ImageViewer.jsx";
import { Link } from "react-router-dom";

function Horizontal({ item, large = true, isLiked }) {
	let isSmall = !large;

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
				width: "950px",
				height: "333px",
				imgWidth: "592px",
				infoWidth: "358px",
				titleWidth: "338px",
				titleHeight: "205px",
				titleSize: "25px",
		  }
		: {
				width: "500px",
				height: "180px",
				imgWidth: "320px",
				infoWidth: "180px",
				titleWidth: "140px",
				titleHeight: "75px",
				titleSize: "17px",
		  };

	return (
		<HorizontalContainer width={style.width} height={style.height}>
			<ImageViewer
				itemnumber={itemnumber}
				images={images}
				cntImg={cntImg}
				width={style.imgWidth}
				height={style.height}
				isVertical={false}
			></ImageViewer>
			<Link to={`/item/${itemnumber}`}>
				<HorizontalInfo width={style.infoWidth} height={style.height}>
					<CategoryLine>
						<CategoryViewer
							text={categoryList[category].text}
							isSmall={isSmall}
						></CategoryViewer>
						<CategoryViewer text={sigungu} isSmall={isSmall}></CategoryViewer>
					</CategoryLine>
					<Title
						width={style.titleWidth}
						height={style.titleHeight}
						size={style.titleSize}
					>
						{title}
					</Title>
					<BottomLine>
						<PriceViewer
							isSmall={isSmall}
							price={price}
							perHour={pricePerHour}
						></PriceViewer>
						<RateReviewLike isSmall={isSmall}>
							<RatingViewer isSmall={isSmall} rating={rate}></RatingViewer>
							<ReviewViewer isSmall={isSmall} review={reviews}></ReviewViewer>
							<LikeViewer
								isSmall={isSmall}
								like={like}
								isLiked={isLiked}
							></LikeViewer>
						</RateReviewLike>
					</BottomLine>
				</HorizontalInfo>
			</Link>
		</HorizontalContainer>
	);
}

const HorizontalContainer = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-bottom: 20px;
	position: relative;
`;

const HorizontalInfo = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
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
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.size};
`;

const BottomLine = styled.div`
	margin: 20px 10px 0 10px;
	height: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const RateReviewLike = styled.div`
	height: ${(props) => (props.isSmall ? "55px" : "30px")};
	display: flex;
	flex-direction: ${(props) => (props.isSmall ? "column" : "row")};
	align-items: flex-end;
	justify-content: space-between;
`;

export default Horizontal;
