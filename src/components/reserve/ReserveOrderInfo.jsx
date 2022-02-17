import H3Box from 'components/common/H3Box';
import { FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveOrderInfo() {
  return (
    <ReserveOrderInfoContainer>
      <ReserveOrderInfoInner>
        <ReserveOrderInfoBox>
          <H3Box variant="h3" height="50px">
            주문정보
          </H3Box>
          <h4>날짜</h4>
          <span>2022.01.18 ~ 2022.01.22</span>
          <h4>가격</h4>
          <span>250,000원/일</span>
        </ReserveOrderInfoBox>
      </ReserveOrderInfoInner>
    </ReserveOrderInfoContainer>
  );
}
const ReserveOrderInfoContainer = styled.section`
  ${FlexJustifyCenter}
  margin-top: 30px;
`;

const ReserveOrderInfoInner = styled.div`
  width: 1250px;
`;

const ReserveOrderInfoBox = styled.div`
  width: 750px;
  h4 {
    font-size: 20px;
    margin-top: 10px;
  }
  span {
    display: inline-block;
    margin-top: 4px;
    font-size: 18px;
  }
`;

export default ReserveOrderInfo;
