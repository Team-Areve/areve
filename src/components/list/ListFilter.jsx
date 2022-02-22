import Button from 'components/common/Button';
import DateInput from 'components/common/DateInput';
import Select from 'components/common/Select';
import { palette } from 'lib/styles/palette';
import { FlexColumn, FlexJustifyCenter, FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import LocationSearchBox from './LocationSearchBox';
import useOutSideClick from 'hooks/useOutSideClick';
import PriceFilter from './PriceFilter';
import useToggle from 'hooks/useToggle';

function ListFilter() {
  const [isOpen, onToggle] = useToggle();
  const { targetEl } = useOutSideClick(isOpen, onToggle);

  return (
    <ListFilterContainer>
      <ListFilterInner>
        <LocationSearchBox></LocationSearchBox>
        <DateInput variant="listPage" />
        <Button variant="tertiary" onClick={onToggle} ref={targetEl}>
          가격
          {isOpen && <PriceFilter />}
        </Button>
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

export default ListFilter;
