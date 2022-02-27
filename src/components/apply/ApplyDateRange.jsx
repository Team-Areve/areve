import H3Box from 'components/common/H3Box';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function ApplyDateRange() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <H3Box variant="h3*" name="일시">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </H3Box>
  );
}

export default ApplyDateRange;
