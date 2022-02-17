import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import { SearchIcon } from 'assets/icons';
import Input from './Input';
import { FlexRow } from 'lib/styles/utilStyles';
import Button from './Button';

function SearchInput({ width, height }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <SearchInputContainer width={width} height={height}>
      <SearchInputStyled
        value={text}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      ></SearchInputStyled>
      <SearchBtn>
        <SearchIcon width="50%" height="50%" />
      </SearchBtn>
    </SearchInputContainer>
  );
}
const SearchInputContainer = styled.div`
  ${FlexRow}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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

export default SearchInput;
