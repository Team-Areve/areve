import { categoryList } from "lib/categoryList";
import { palette } from "lib/styles/palette";
import { FlexJustifyCenter, FlexRow } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function DetailTitle(props) {
	return (
		<>
			<DetailName>{props.title}</DetailName>
			<DetailCateoryList>
				<DetailCategory>{categoryList[props.category].text}</DetailCategory>
				<DetailCategory>{props.sigungu}</DetailCategory>
			</DetailCateoryList>
		</>
	);
}
const DetailName = styled.h2`
	margin-top: 70px;
	font-size: 40px;
`;

const DetailCateoryList = styled.ul`
	${FlexRow}
`;
const DetailCategory = styled.li`
	${FlexJustifyCenter};
	align-items: center;
	padding: 0 30px 0 30px;
	height: 50px;
	margin-top: 40px;
	margin-right: 20px;
	font-size: 30px;
	border: 1px solid ${palette.MainColor};
`;
export default DetailTitle;
