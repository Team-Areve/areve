import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import React from 'react';

function ApplyPrice() {
  return (
    <H3Box variant="h3*" name="가격">
      <Input width={'250px'} height={'50px'} />
      <select name="">
        <option value="">원/시간</option>
        <option value="">b</option>
        <option value="">c</option>
        <option value="">d</option>
      </select>
    </H3Box>
  );
}

export default ApplyPrice;
