import React from "react";
import styled, { css } from "styled-components";
import Image from "react-image-webp";
import { Link } from "react-router-dom";

function CategoryIcon({ categoryItem }) {
	const { catNumber, text, icon } = categoryItem;
	return (
		<CategoryIconWrapper>
			<Link to={catNumber}>
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
	margin-right: 70px;
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
