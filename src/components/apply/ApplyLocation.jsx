import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';
import ApplySection from './ApplySection';

function ApplyLocation() {
  return (
    <ApplySection name="위치">
      <ApplyLocationInner>
        <div>
          <button>내 위치</button>
          <button>주소 검색</button>
        </div>
        <Input width={'1080px'} height={'50px'} />
        <Input width={'1080px'} height={'50px'} />
      </ApplyLocationInner>
    </ApplySection>
  );
}

const ApplyLocationInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ApplyLocation;
