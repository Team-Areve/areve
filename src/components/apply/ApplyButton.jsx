import Button from 'components/common/Button';
import { FlexJustifyCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ApplyButton() {
  return (
    <ApplyButtonContainer>
      <ApplyButtonInner>
        <Button variant="primary" width="150px" height="60px">
          등록하기
        </Button>
      </ApplyButtonInner>
    </ApplyButtonContainer>
  );
}

const ApplyButtonContainer = styled.section`
  ${FlexJustifyCenter}
`;

const ApplyButtonInner = styled(Inner)`
  justify-content: flex-end;
`;
export default ApplyButton;
