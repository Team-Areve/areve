import { palette } from 'lib/styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <SearchContainer>
      <SearchText>무엇을 찾고 계신가요?</SearchText>
      <SearchInput />
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
  font-size: 33px;
  font-weight: normal;
  text-align: left;
  color: ${palette.MainColor};
`;

const SearchBtn = styled.button`
  width: 96px;
  height: 98px;
  flex-grow: 0;
  padding: 19px 17px 19px 19px;
  background-color: ${palette.MainColor};
`;

export default Search;
