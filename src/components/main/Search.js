import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <SearchContainer>
      <SearchText>무엇을 찾고 계신가요?</SearchText>
      <SearchInput placeholder="검색어를 입력하세요"></SearchInput>
      <SearchBtn></SearchBtn>
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  margin-top: 20vh;
`;

const SearchText = styled.h2`
  font-size: 40px;
  width: 980px;
  height: 100px;
  font-family: Roboto;
  font-size: 33px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${palette.MainColor};
`;

const SearchInput = styled.input`
  width: 884px;
  height: 98px;
  padding: 0 250px 0 0;
`;

const SearchBtn = styled.button`
  width: 96px;
  height: 98px;
  flex-grow: 0;
  padding: 19px 17px 19px 19px;
  background-color: ${palette.MainColor};
`;

export default Search;
