import Button from 'components/common/Button';
import { palette } from 'lib/styles/palette';
import { FlexBetween } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReservePay() {
  return (
    <ReserveInfoPayBox>
      <ReservePayPrice>
        <span>175,370원/일 X 0일</span>
        <span>1,753,750원</span>
      </ReservePayPrice>
      <ReservePayPrice>
        <span>175,370원/일 X 0일</span>
        <span>1,753,750원</span>
      </ReservePayPrice>
      <ReservePayButton variant="primary" width="410px" height="70px">
        예약하기
      </ReservePayButton>
    </ReserveInfoPayBox>
  );
}

const ReserveInfoPayBox = styled.div`
  width: 450px;
  height: 348px;
  padding: 20px 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px ${palette.MainColor};
`;

const ReservePayPrice = styled.div`
  ${FlexBetween}
  margin-bottom : 88px;
`;

const ReservePayButton = styled(Button)`
  margin-top: 48px;
`;

export default ReservePay;
