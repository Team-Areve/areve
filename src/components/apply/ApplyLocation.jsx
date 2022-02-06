import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';

function ApplyLocation() {
  return (
    <H3Box variant="h3*" name="위치">
      <ApplyLocationInner>
        <div>
          <button>내 위치</button>
          <button>주소 검색</button>
        </div>
        <Input width={'1080px'} height={'50px'} />
        <Input width={'1080px'} height={'50px'} />
      </ApplyLocationInner>
    </H3Box>
  );
}

const ApplyLocationInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ApplyLocation;
