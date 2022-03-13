import { SearchIcon } from 'assets/icons/index.js';
import Button from 'components/common/Button.jsx';
import Input from 'components/common/Input.jsx';
import { FlexRow } from 'lib/styles/utilStyles.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../../lib/styles/palette.js';

function MainSearch() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate(`search?q=${text}`);
  };
  return (
    <SearchContainer>
      <SearchTextWrap>
        <SearchText>무엇을 찾고 계신가요?</SearchText>
      </SearchTextWrap>
      <SearchInputContainer>
        <SearchInputStyled
          value={text}
          onChange={onChange}
          placeholder="검색어를 입력하세요"
        ></SearchInputStyled>
        <SearchBtn onClick={onSubmit}>
          <SearchIcon width="50%" height="50%" />
        </SearchBtn>
      </SearchInputContainer>
    </SearchContainer>
  );
}

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

const SearchInputContainer = styled.form`
  ${FlexRow}
  width: 950px;
  height: 100px;
`;

const SearchInputStyled = styled(Input)`
  width: 89.4%;
  height: 100%;
  font-size: 1.6rem;
  border-radius: 0;

  ::placeholder {
    color: #666666;
  }
  :focus {
    outline: none;
  }
`;

const SearchBtn = styled(Button)`
  width: 10.6%;
  height: 100%;
  flex-grow: 0;
  border-radius: 0;
  background-color: ${palette.MainColor};
`;

export default MainSearch;
