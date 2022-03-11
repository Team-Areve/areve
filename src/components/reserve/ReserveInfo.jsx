import H3Box from "components/common/H3Box";
import { categoryList } from "lib/categoryList";
import { palette } from "lib/styles/palette";
import {
	FlexBetween,
	FlexJustifyCenter,
	FlexColumn,
} from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function ReserveInfo({ item }) {
	let image =
		item.image1.slice(-3) === "png"
			? "data:image/png;base64," + item.image1.slice(0, -3)
			: "data:image/jpeg;base64," + item.image1.slice(0, -4);
	return (
		<ReserveInfoContainer>
			<ReserveInfoItemBox>
				<H3Box variant="h3" height="50px" width="750px">
					정보
				</H3Box>
				<ReserveInfoItemBoxImage src={image} />

				<ReserveInfoItemBoxTitle>{item.title}</ReserveInfoItemBoxTitle>
				<ReserveInfoItemBoxCategoryLocation>
					<h4>카테고리</h4>
					<span>{categoryList[item.category].text}</span>
				</ReserveInfoItemBoxCategoryLocation>
				<ReserveInfoItemBoxCategoryLocation>
					<h4>위치</h4>
					<span>{item.location}</span>
				</ReserveInfoItemBoxCategoryLocation>
			</ReserveInfoItemBox>
		</ReserveInfoContainer>
	);
}

const ReserveInfoContainer = styled.section`
	margin-top: 30px;
`;

const ReserveInfoItemBox = styled.div`
	${FlexColumn}
	width:750px;
	height: 400px;
`;

const ReserveInfoItemBoxImage = styled.img`
	width: 320px;
	height: 180px;
	background-color: ${palette.gray};
	margin-bottom: 20px;
	object-fit: cover;
`;

const ReserveInfoItemBoxTitle = styled.h4`
	display: flex;
	font-size: 30px;
	margin-bottom: 10px;
`;

const ReserveInfoItemBoxCategoryLocation = styled.div`
	${FlexBetween}
	margin-bottom: 10px;
	color: ${palette.grayDarker};
`;

export default ReserveInfo;
