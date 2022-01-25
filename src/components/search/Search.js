<<<<<<< HEAD:src/components/search/Search.js
import { palette } from 'lib/styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
=======
import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../assets/icons";
import { palette } from "../../lib/styles/palette.js";
>>>>>>> test_H:src/components/main/Search.js

const Search = () => {
  return (
    <SearchContainer>
<<<<<<< HEAD:src/components/search/Search.js
      <SearchText>무엇을 찾고 계신가요?</SearchText>
      <SearchInput />
      <SearchBtn></SearchBtn>
=======
      <SearchTextWrap>
        <SearchText>무엇을 찾고 계신가요?</SearchText>
      </SearchTextWrap>
      <SearchBar>
        <SearchInput placeholder="검색어를 입력하세요"></SearchInput>
        <SearchBtn>
          <SearchIcon width="50" height="50" />
        </SearchBtn>
      </SearchBar>
>>>>>>> test_H:src/components/main/Search.js
    </SearchContainer>
  );
};

<<<<<<< HEAD:src/components/search/Search.js
const SearchContainer = styled.section`
  margin-top: 20vh;
`;

const SearchText = styled.h2`
  font-size: 40px;
  width: 980px;
  height: 100px;
  font-size: 33px;
  font-weight: normal;
  text-align: left;
  color: ${palette.MainColor};
`;
=======
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
>>>>>>> test_H:src/components/main/Search.js

const SearchBtn = styled.button`
  width: 100px;
  height: 100px;
  flex-grow: 0;
  background-color: ${palette.MainColor};
<<<<<<< HEAD:src/components/search/Search.js
=======
  border: 0px;
>>>>>>> test_H:src/components/main/Search.js
`;

export default Search;
