import H3Box from 'components/common/H3Box';
import React from 'react';
import styled from 'styled-components';

function ApplyCategory() {
  return (
    <H3Box variant="h3*" name="카테고리">
      <ApplyCategorySelect name="category">
        <option value="">선택하세요</option>
        <option value="">b</option>
        <option value="">c</option>
        <option value="">d</option>
      </ApplyCategorySelect>
    </H3Box>
  );
}
const ApplyCategorySelect = styled.select`
  width: 1080px;
  height: 50px;
`;

export default ApplyCategory;
