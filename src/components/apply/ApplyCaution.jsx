import Input from 'components/common/Input';
import { FlexColumn } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import ApplySection from './ApplySection';

function ApplyCaution() {
  return (
    <ApplySection name="주의사항">
      <FlexColumn>
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
        <ApplyCautionInput width="1020px" height="50px" />
      </FlexColumn>
    </ApplySection>
  );
}

const ApplyCautionInput = styled(Input)`
  margin-bottom: 10px;
`;

export default ApplyCaution;
