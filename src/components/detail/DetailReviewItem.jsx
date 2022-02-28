import { Star } from "assets/icons";
import { palette } from "lib/styles/palette";
import {
	DetailContainer,
	FlexAlignCenter,
	FlexRow,
} from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function DetailReviewItem({ username, content, score }) {
	const render = () => {
		const res = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= score) {
				res.push(<Star width="25px" height="25px" fill="orange"></Star>);
			} else {
				res.push(<Star width="25px" height="25px" fill="black"></Star>);
			}
		}
		return res;
	};

	return (
		<DetailContainer>
			<DetailReviewInfo>
				<DetailReviewNickname>{username}</DetailReviewNickname>
				<DetailReviewRate>{render()}</DetailReviewRate>
			</DetailReviewInfo>
			<DetailReviewText>{content}</DetailReviewText>
		</DetailContainer>
	);
}

const DetailReviewInfo = styled.div`
	${FlexRow}
	justify-content : space-between;
`;

const DetailReviewNickname = styled.span`
	${FlexRow}
	${FlexAlignCenter}
  color: ${palette.MainColor}
`;

const DetailReviewRate = styled.div`
	${FlexAlignCenter}
`;

const DetailReviewText = styled.div`
	width: 600px;
	height: 100px;
	margin: 20px 0 0 30px;
	font-size: 17px;
`;

export default DetailReviewItem;
