import ImageViewer from "components/item/viewers/ImageViewer";
import { FlexRow } from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";

function DetailImg({ img, cntImg }) {
	const [curImg, setCurImg] = useState(0);
	const [hover, setHover] = useState(false);
	let images = img;
	for (let i = 0; i < cntImg; i++) {
		if (images[i] === "") break;
		let format = images[i].slice(-3);
		if (format === "png") {
			images[i] = "data:image/png;base64," + images[i].slice(0, -3);
		} else if (format === "peg") {
			images[i] = "data:image/jpeg;base64," + images[i].slice(0, -4);
		}
	}

	return (
		<DetailImgContainer>
			<ImgLayout
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
			>
				<DetailMainImg src={images[curImg]}></DetailMainImg>
				{hover ? (
					<HoverLeft
						onClick={() => {
							if (curImg === 0) {
								setCurImg(cntImg - 1);
							} else {
								setCurImg((curImg - 1) % cntImg);
							}
						}}
					>
						＜
					</HoverLeft>
				) : (
					<></>
				)}
				{hover ? (
					<HoverRight
						onClick={() => {
							setCurImg((curImg + 1) % cntImg);
						}}
					>
						＞
					</HoverRight>
				) : (
					<></>
				)}
			</ImgLayout>
			<DetailImgList>
				{images.map((v, i) => {
					return v !== "" ? (
						<DetailSubImg
							key={`ItemSubImages_${i}`}
							src={v}
							onMouseDown={() => setCurImg(i)}
						></DetailSubImg>
					) : (
						<></>
					);
				})}
			</DetailImgList>
		</DetailImgContainer>
	);
}

const DetailImgContainer = styled.article`
	margin-top: 50px;
	height: 630px;
`;

const ImgLayout = styled.div`
	width: 750px;
	height: 500px;
	overflow: hidden;
	position: relative;
`;

const DetailMainImg = styled.img`
	width: 750px;
	height: 500px;
	object-fit: cover;
`;

const HoverRight = styled.div`
	width: 70px;
	height: 500px;
	background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	right: 0px;
	top: 0px;
	font-size: 30px;
	color: white;
	line-height: 500px;
	vertical-align: middle;
	text-align: center;
`;

const HoverLeft = styled.div`
	width: 70px;
	height: 500px;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	left: 0px;
	top: 0px;
	font-size: 30px;
	color: white;
	line-height: 500px;
	vertical-align: middle;
	text-align: center;
`;

const DetailImgList = styled.div`
	${FlexRow}
	margin-top: 30px;
	overflow: auto;
`;

const DetailSubImg = styled.img`
	width: 150px;
	height: 100px;
	margin-right: 20px;
	background-color: gray;
	object-fit: cover;
`;

export default DetailImg;
