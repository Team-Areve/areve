import { palette } from 'lib/styles/palette';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled, { css } from 'styled-components';

function DateInput({ variant, ...rest }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePickerStyled
      variant={variant}
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      dateFormat={'yy/MM/dd'}
      selectsRange
      {...rest}
    />
  );
}

const DatePickerStyled = styled(DatePicker)`
  /* height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius}; */
  text-align: center;
  ${({ variant }) => {
    switch (variant) {
      case 'listPage':
        return css`
          width: 200px;
          height: 50px;
          border-radius: 10px;
          border: none;
          font-size: 20px;
        `;
      default:
        return css``;
    }
  }}
`;

export default DateInput;
