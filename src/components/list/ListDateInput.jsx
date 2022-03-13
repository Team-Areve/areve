import { palette } from 'lib/styles/palette';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

function ListDateInput() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <ListDatePickerStyled
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      dateFormat={'yy/MM/dd'}
      selectsRange
    />
  );
}

const ListDatePickerStyled = styled(DatePicker)`
  text-align: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${palette.grayLight};
  font-size: 16px;
`;

export default ListDateInput;
