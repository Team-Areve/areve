import Button from 'components/common/Button';
import DateInput from 'components/common/DateInput';
import Select from 'components/common/Select';
import { palette } from 'lib/styles/palette';
import { FlexColumn, FlexJustifyCenter, FlexRow } from 'lib/styles/utilStyles';
import React, { useRef } from 'react';
import styled from 'styled-components';
import LocationSearchBox from './LocationSearchBox';
import { useOutsideClick } from 'hooks/useOutSideClick';
import PriceFilter from './PriceFilter';

function ListFilter() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  console.log(dropdownRef);
  return (
    <ListFilterContainer>
      <ListFilterInner>
        <LocationSearchBox></LocationSearchBox>
        <DateInput variant="listPage" />
        <ListFilterPriceBox ref={dropdownRef}>
          <Button variant="tertiary" onClick={onClick}>
            가격
          </Button>
          <PriceFilter isActive={isActive}></PriceFilter>
        </ListFilterPriceBox>
        <Select width="200px" height="50px" fontSize="20px">
          <option value="">인기순</option>
          <option value="">최신순</option>
        </Select>
      </ListFilterInner>
    </ListFilterContainer>
  );
}

const ListFilterContainer = styled.section`
  ${FlexJustifyCenter};
  margin-top: 20px;
`;

const ListFilterInner = styled.div`
  ${FlexRow};
  justify-content: flex-start;
  width: 1250px;

  > * {
    margin-right: 20px;
    border: 1px solid ${palette.grayLight};
    border-radius: 10px;
  }

  .react-datepicker-wrapper {
    font-size: 20px;
    width: auto;
  }
`;

const ListFilterPriceBox = styled.div`
  ${FlexColumn}
`;

export default ListFilter;
