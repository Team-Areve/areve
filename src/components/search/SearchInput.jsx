import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

function SearchInput() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <SearchInputBlock
      value={text}
      onChange={onChange}
      placeholder="검색어를 입력하세요"
    />
  );
}
const SearchInputBlock = styled.input`
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

export default SearchInput;
