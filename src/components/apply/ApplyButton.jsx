import Button from 'components/common/Button';
import { FlexCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ApplyButton() {
  return (
    <ApplyButtonContainer>
      <ApplyButtonInner>
        <Button width="150px" height="60px">
          등록하기
        </Button>
      </ApplyButtonInner>
    </ApplyButtonContainer>
  );
}

const ApplyButtonContainer = styled.section`
  ${FlexCenter}
`;

const ApplyButtonInner = styled(Inner)`
  justify-content: flex-end;
`;
export default ApplyButton;
