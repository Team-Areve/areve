import React, { useState } from "react";
import styled from "styled-components";

function ImageViewer({ width, height, images, cntImg, isVertical }) {
	const [hover, setHover] = useState(false);
	const [curImg, setCurImg] = useState(0);

	const radius = isVertical
		? { right: "0 10px 0 0", left: "10px 0 0 0", image: "10px 10px 0 0" }
		: { right: "0", left: "10px 0 0 10px", image: "10px 0 0 10px" };

	return (
		<ImageWrapper
			width={width}
			height={height}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			<Image
				width={width}
				height={height}
				src={images[curImg]}
				style={{ borderRadius: radius.image }}
			></Image>
			{hover ? (
				<HoverLeft
					height={height}
					style={{ borderRadius: radius.left }}
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
					style={{ borderRadius: radius.right }}
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
	width: 70px;
	height: ${(props) => props.height};
	background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	right: 0px;
	top: 0px;
	font-size: 30px;
	color: white;
	line-height: ${(props) => props.height};
	vertical-align: middle;
	text-align: center;
`;

const HoverLeft = styled.div`
	width: 70px;
	height: ${(props) => props.height};
	background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	left: 0px;
	top: 0px;
	font-size: 30px;
	color: white;
	line-height: ${(props) => props.height};
	vertical-align: middle;
	text-align: center;
`;

const Image = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: inline;
	object-fit: cover;
	background-color: black;
`;

export default ImageViewer;
