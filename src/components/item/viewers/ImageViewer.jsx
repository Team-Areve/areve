import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

function ImageViewer({
	itemnumber,
	width,
	height,
	images,
	cntImg,
	isVertical,
	link,
}) {
	const [hover, setHover] = useState(false);
	const [curImg, setCurImg] = useState(0);
	const navigate = useNavigate();

	const radius = isVertical
		? { right: "0 10px 0 0", left: "10px 0 0 0", image: "10px 10px 0 0" }
		: { right: "0", left: "10px 0 0 10px", image: "10px 0 0 10px" };

	const onNavigate = () => {
		if (link === false) {
			return;
		}
		if (itemnumber === undefined) {
			return;
		}
		navigate(`/item/${itemnumber}`);
	};

	const active = { opacity: "1", transition: "opacity 500ms" };
	const hidden = {
		display: "none",
	};

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
			onClick={onNavigate}
		>
			<Image
				width={width}
				height={height}
				src={images[curImg]}
				style={{ borderRadius: radius.image }}
			></Image>
			<HoverLeft
				height={height}
				radius={radius.left}
				hover={hover}
				onClick={(e) => {
					e.stopPropagation();
					if (curImg === 0) {
						setCurImg(cntImg - 1);
					} else {
						setCurImg((curImg - 1) % cntImg);
					}
				}}
			>
				＜
			</HoverLeft>
			<HoverRight
				height={height}
				radius={radius.right}
				hover={hover}
				onClick={(e) => {
					e.stopPropagation();
					setCurImg((curImg + 1) % cntImg);
				}}
			>
				＞
			</HoverRight>
		</ImageWrapper>
	);
}

const ImageWrapper = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	overflow: hidden;
	position: relative;
`;

const HoverRight = styled.button`
	width: 80px;
	height: ${(props) => props.height};
	border-radius: ${(props) => props.radius};
	background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
	z-index: 70;
	position: absolute;
	right: 0px;
	top: 0px;
	font-size: 40px;
	color: white;
	line-height: ${(props) => props.height};
	vertical-align: middle;
	text-align: center;

	${(props) => Animation(props.hover)}
`;

const HoverLeft = styled.button`
	width: 80px;
	height: ${(props) => props.height};
	border-radius: ${(props) => props.radius};
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
	z-index: 100;
	position: absolute;
	left: 0px;
	top: 0px;
	font-size: 40px;
	color: white;
	line-height: ${(props) => props.height};
	vertical-align: middle;
	text-align: center;

	${(props) => Animation(props.hover)}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Animation = (hover) => css`
	visibility: ${hover ? "visible" : "hidden"};
	animation: ${hover ? fadeIn : fadeOut} 0.3s ease-out;
	transition: visibility 0.3s ease-out;
`;

const Image = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: inline;
	object-fit: cover;
	background-color: black;
`;

export default ImageViewer;
