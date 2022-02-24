import { FlexAlignCenter, FlexColumn, FlexRow } from 'lib/styles/utilStyles';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

function DetailDateInput() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DetailDatePickerWrapper>
        <DetailDatePickerStyled
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat={'yyyy/MM/dd/h:mm aa'}
          startDate={startDate}
          endDate={endDate}
        />
        <span>부터</span>
      </DetailDatePickerWrapper>
      <DetailDatePickerWrapper>
        <DetailDatePickerStyled
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat={'yyyy/MM/dd/h:mm aa'}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <span>까지</span>
      </DetailDatePickerWrapper>
    </>
  );
}

const DetailDatePickerWrapper = styled.div`
  ${FlexRow}
  span {
    ${FlexAlignCenter}
    width: 50px;
  }
`;

const DetailDatePickerStyled = styled(DatePicker)`
  text-align: center;
  width: 360px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 20px;
`;
export default DetailDateInput;
