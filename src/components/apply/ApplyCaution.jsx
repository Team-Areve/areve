import Input from 'components/common/Input';
import { FlexColumn } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import ApplySection from './ApplySection';

function ApplyCaution() {
  return (
    <ApplySection name="주의사항">
      <ApplyCautionInner>
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
      </ApplyCautionInner>
    </ApplySection>
  );
}

const ApplyCautionInput = styled(Input)`
  margin-bottom: 10px;
`;

const ApplyCautionInner = styled.div`
  ${FlexColumn};
`;

export default ApplyCaution;
