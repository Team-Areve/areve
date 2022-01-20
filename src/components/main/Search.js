import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../assets/icons";
import { palette } from "../../lib/styles/palette.js";

const Search = () => {
  return (
    <SearchContainer>
      <SearchTextWrap>
        <SearchText>무엇을 찾고 계신가요?</SearchText>
      </SearchTextWrap>
      <SearchBar>
        <SearchInput placeholder="검색어를 입력하세요"></SearchInput>
        <SearchBtn>
          <SearchIcon width="50" height="50" />
        </SearchBtn>
      </SearchBar>
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
  font-size: 35px;
  color: ${palette.MainColor};
`;

const SearchBar = styled.div`
  width: 950px;
  height: 100px;
  display: flex;
`;

const SearchInput = styled.input`
  width: 850px;
  height: 100px;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid ${palette.MainColor};
  font-size: 25px;

  ::placeholder {
    color: #666666;
    font-size: 25px;
  }

  :focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 100px;
  flex-grow: 0;
  background-color: ${palette.MainColor};
  border: 0px;
`;

export default Search;
