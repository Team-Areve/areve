import H3Box from 'components/common/H3Box';
import { FlexColumn, FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveCheck() {
  return (
    <ReserveCheckContainer>
      <ReserveClientInfoInner>
        <H3Box variant="h3" height="50px">
          서비스 동의
        </H3Box>
        <ReserveCheckInner>
          <label>
            <input type="checkbox" /> 위 공간의 예약조건 확인 및 결제 진행 동의
            (필수)
          </label>
          <label>
            <input type="checkbox" /> 개인정보 제3자 제공 동의 (필수)
          </label>
          <label>
            <input type="checkbox" /> 개인정보 수집 및 이용 동의 (필수)
          </label>
        </ReserveCheckInner>
      </ReserveClientInfoInner>
    </ReserveCheckContainer>
  );
}

const ReserveCheckContainer = styled.section`
  ${FlexJustifyCenter}
  margin-top: 30px;
`;

const ReserveClientInfoInner = styled.div`
  width: 1250px;
`;

const ReserveCheckInner = styled.form`
  ${FlexColumn}
  margin-top: 40px;

  label {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export default ReserveCheck;
