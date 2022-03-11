import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FlexRow } from 'lib/styles/utilStyles';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { palette } from 'lib/styles/palette';
import { SearchIcon } from 'assets/icons';
import useToggle from 'hooks/useToggle';
import LocationSearchSuggestion from './LocationSearchSuggestion';

function LocationSearchBox() {
  const [addressList, setAddressList] = useState([{}, {}]);
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const [isOpen, onToggle] = useToggle();

  useEffect(() => {
    const onGetAddress = async () => {
      try {
        const res = await axios.post(
          `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=5&keyword=${text}&confmKey=devU01TX0FVVEgyMDIyMDMwMjIyMjI0MTExMjMwMTc=&resultType=json`
        );
        res.data.results.juso && setAddressList(res.data.results.juso);
      } catch (error) {
        console.log(error);
      }
    };

    onGetAddress();
  }, [text]);

  return (
    <LocationSearchBoxContainer>
      <SearchInputContainer>
        <SearchInputStyled
          value={text}
          onChange={onChange}
          onClick={onToggle}
          placeholder="검색어를 입력하세요"
        />
        <SearchBtn>
          <SearchIcon width="50%" height="50%" />
        </SearchBtn>
      </SearchInputContainer>
      {isOpen && <LocationSearchSuggestion addressList={addressList} />}
    </LocationSearchBoxContainer>
  );
}

const LocationSearchBoxContainer = styled.div`
  /* width: 500px;
  height: 400px; */
`;

const SearchInputContainer = styled.form`
  ${FlexRow}
  width: 400px;
  height: 50px;
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

export default LocationSearchBox;
