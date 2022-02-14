import H3Box from 'components/common/H3Box';
import { palette } from 'lib/styles/palette';
import {
  FlexBetween,
  FlexJustifyCenter,
  FlexColumn,
} from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import ReservePay from './ReservePay';

function ReserveInfo() {
  return (
    <ReserveInfoContainer>
      <ReserveInfoInner>
        <ReserveInfoItemBox>
          <H3Box variant="h3" height="50px">
            정보
          </H3Box>
          <ReserveInfoItemBoxImage />

          <ReserveInfoItemBoxTitle>
            홍대/합정 자연광, 호리존트, 한강뷰 PACS Studio
          </ReserveInfoItemBoxTitle>
          <ReserveInfoItemBoxCategoryLocation>
            <h4>카테고리</h4>
            <span>주거</span>
          </ReserveInfoItemBoxCategoryLocation>
          <ReserveInfoItemBoxCategoryLocation>
            <h4>위치</h4>
            <span>인천시 미추홀구 용현동 485</span>
          </ReserveInfoItemBoxCategoryLocation>
        </ReserveInfoItemBox>
        <ReservePay />
      </ReserveInfoInner>
    </ReserveInfoContainer>
  );
}

const ReserveInfoContainer = styled.section`
  ${FlexJustifyCenter}
  margin-top: 30px;
`;
const ReserveInfoInner = styled.div`
  ${FlexBetween}
  width: 1250px;
`;

const ReserveInfoItemBox = styled.div`
  ${FlexColumn}
  width:750px;
  height: 400px;
`;

const ReserveInfoItemBoxImage = styled.div`
  width: 320px;
  height: 180px;
  background-color: ${palette.gray};
  margin-bottom: 20px;
`;

const ReserveInfoItemBoxTitle = styled.h4`
  display: flex;
  font-size: 30px;
  margin-bottom: 10px;
`;

const ReserveInfoItemBoxCategoryLocation = styled.div`
  ${FlexBetween}
  margin-bottom: 10px;
  color: ${palette.grayDarker};
`;

export default ReserveInfo;
