import Input from 'components/common/Input';
import React from 'react';
import ApplySection from './ApplySection';

function ApplyPrice() {
  return (
    <ApplySection name="가격">
      <Input width={'250px'} height={'50px'} />
      <select name="">
        <option value="">가격/시간</option>
        <option value="">b</option>
        <option value="">c</option>
        <option value="">d</option>
      </select>
    </ApplySection>
  );
}

export default ApplyPrice;
