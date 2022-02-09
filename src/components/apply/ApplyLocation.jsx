import Button from 'components/common/Button';
import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import { FlexBetween } from 'lib/styles/utilStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

function ApplyLocation() {
  return (
    <H3Box variant="h3*" name="위치">
      <ApplyLocationInner>
        <ApplyLocationButtonBox>
          <Button width="200px" height="50px" variant="secondary">
            내 위치
          </Button>
          <Button width="200px" height="50px" variant="secondary">
            주소 검색
          </Button>
        </ApplyLocationButtonBox>
        <Input width="1080px" height="50px" />
        <Input width="1080px" height="50px" placeholder="상세 주소" />
      </ApplyLocationInner>
    </H3Box>
  );
}

const ApplyLocationInner = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
  }
`;

const ApplyLocationButtonBox = styled.div`
  ${FlexBetween}
  width : 420px;
  margin-bottom: 10px;
`;
export default ApplyLocation;
