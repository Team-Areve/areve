import { palette } from "lib/styles/palette";
import { FlexColumn } from "lib/styles/utilStyles";
import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewTableColumnItem from "./ReviewTableColumnItem";

function ReviewTableColumn({ review, children }) {
	return (
		<ReviewTableColumnContainer>
			<ReviewTableColumnHeader>{children}</ReviewTableColumnHeader>
			<ReviewTableColumnList>
				{review.map(({ score, content, reviewnumber }) => (
					<ReviewTableColumnItem
						key={`Reviewnumber_${reviewnumber}`}
						comment={content}
						rate={score}
						reviewnumber={reviewnumber}
					></ReviewTableColumnItem>
				))}
			</ReviewTableColumnList>
		</ReviewTableColumnContainer>
	);
}

const ReviewTableColumnContainer = styled.div`
	margin-top: 65px;
`;

const ReviewTableColumnHeader = styled.h3`
	width: 650px;
	font-size: 25px;
	border-bottom: 1px solid ${palette.grayLight};
	text-align: center;
	height: 50px;
`;

const ReviewTableColumnList = styled.ul`
	${FlexColumn}
	font-size: 20px;
`;

export default ReviewTableColumn;
