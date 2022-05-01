import { palette } from "lib/styles/palette";
import { DetailContainer } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";
import DetailH3 from "./DetailH3";

function DetailText(props) {
	return (
		<DetailContainer>
			<DetailH3>상세 정보</DetailH3>
			<DetailTextBody>{props.content}</DetailTextBody>
		</DetailContainer>
	);
}

const DetailTextBody = styled.div`
	margin-top: 20px;
`;

export default DetailText;
