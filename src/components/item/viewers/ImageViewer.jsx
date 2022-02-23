import React, { useState } from "react";
import styled from "styled-components";

function ImageViewer({ width, height, images, cntImg }) {
	const [hover, setHover] = useState(false);
	const [curImg, setCurImg] = useState(0);

	return (
		<ImageWrapper
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			<Image width={width} height={height} src={images[curImg]}></Image>
			{hover ? (
				<HoverLeft
					height={height}
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
					height={height}
					onClick={() => {
						setCurImg((curImg + 1) % cntImg);
					}}
				>
					＞
				</HoverRight>
			) : (
				<></>
			)}
		</ImageWrapper>
	);
}

const ImageWrapper = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	overflow: hidden;
	position: relative;
`;

const HoverRight = styled.div`
	width: 50px;
	height: ${(props) => props.height};
	background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	right: 0px;
	top: 0px;
	border-radius: 0 10px 0 0;
	font-size: 30px;
	color: white;
	line-height: 216px;
	vertical-align: middle;
	text-align: center;
`;

const HoverLeft = styled.div`
	width: 50px;
	height: ${(props) => props.height};
	background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 10px 0 0 0;
	font-size: 30px;
	color: white;
	line-height: 216px;
	vertical-align: middle;
	text-align: center;
`;

const Image = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: inline;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	background-color: black;
`;

export default ImageViewer;
