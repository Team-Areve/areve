import { useState } from 'react';
import styled from 'styled-components';

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
  width: 884px;
  height: 98px;
  padding: 0 250px 0 0;
`;

export default SearchInput;
