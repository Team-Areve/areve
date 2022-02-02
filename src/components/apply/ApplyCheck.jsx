import { FlexCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ApplyCheck() {
  return (
    <ApplyCheckContainer>
      <ApplyCheckInner>
        <ApplyCheckForm>
          <label>
            <input type="checkbox" /> 동의?
          </label>
          <label>
            <input type="checkbox" /> 보감
          </label>
        </ApplyCheckForm>
      </ApplyCheckInner>
    </ApplyCheckContainer>
  );
}

const ApplyCheckContainer = styled.section`
  ${FlexCenter}
  border-bottom: 1px solid #f6f6f6;
`;

const ApplyCheckInner = styled.div`
  width: 1250px;
  margin: 30px 0;
`;

const ApplyCheckForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }
`;

export default ApplyCheck;
