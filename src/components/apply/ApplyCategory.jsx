import React from 'react';
import styled from 'styled-components';
import ApplySection from './ApplySection';

function ApplyCategory() {
  return (
    <ApplySection name="카테고리">
      <ApplyCategorySelect name="category">
        <option value="">선택하세요</option>
        <option value="">b</option>
        <option value="">c</option>
        <option value="">d</option>
      </ApplyCategorySelect>
    </ApplySection>
  );
}
const ApplyCategorySelect = styled.select`
  width: 1080px;
  height: 50px;
`;

export default ApplyCategory;
