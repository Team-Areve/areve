import H3Box from 'components/common/H3Box';
import Select from 'components/common/Select';
import React from 'react';

function ApplyCategory() {
  return (
    <H3Box variant="h3*" name="카테고리">
      <Select width="1080px" height="50px">
        <option value="">선택하세요</option>
        <option value="">b</option>
        <option value="">c</option>
        <option value="">d</option>
      </Select>
    </H3Box>
  );
}

export default ApplyCategory;
