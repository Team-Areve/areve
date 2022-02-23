import SearchInput from "components/common/SearchInput";
import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";

const MainSearch = () => {
	return (
		<SearchContainer>
			<SearchTextWrap>
				<SearchText>무엇을 찾고 계신가요?</SearchText>
			</SearchTextWrap>
			<SearchInput width="950px" height="100px"></SearchInput>
		</SearchContainer>
	);
};

const SearchContainer = styled.div`
	margin-top: 50px;
	width: 1250px;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SearchTextWrap = styled.div`
	display: flex;
	align-items: center;
	width: 950px;
	height: 100px;
`;

const SearchText = styled.h2`
	font-size: 30px;
	color: ${palette.MainColor};
`;

export default MainSearch;
