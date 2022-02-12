import React from "react";
import styled, { css } from "styled-components";
import Image from "react-image-webp";
import { Link } from "react-router-dom";

// function CategoryIcon({ test: { text, icon } }) {
function CategoryIcon({ categoryItem }) {
	const { text, icon } = categoryItem;
	return (
		<CategoryIconWrapper text={text}>
			<Link to="/">
				<CategoryIconImage>
					<Image src={icon} webp={icon}></Image>
				</CategoryIconImage>
				<CategoryIconText>{text}</CategoryIconText>
			</Link>
		</CategoryIconWrapper>
	);
}
const CategoryIconWrapper = styled.div`
	margin-top: 50px;
	${({ text }) => {
		switch (text) {
			case "주방/생활용품":
			case "교환해요":
				return css`
					margin-right: 0px;
				`;
			default:
				return css`
					margin-right: 70px;
				`;
		}
	}};
`;

const CategoryIconImage = styled.div``;

const CategoryIconText = styled.div`
	width: 120px;
	height: 20px;
	margin-top: 10px;
	font-size: 15px;
	text-align: center;
`;

export default CategoryIcon;
