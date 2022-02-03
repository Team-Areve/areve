import H3Box from 'components/common/H3Box';
import { palette } from 'lib/styles/palette';
import { FlexBetween, FlexCenter, FlexColumn } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveInfoItem() {
  return (
    <ReserveInfoItemContainer>
      <ReserveInfoItemInner>
        <ReserveInfoItemBox>
          <H3Box height="50px">정보</H3Box>
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
      </ReserveInfoItemInner>
    </ReserveInfoItemContainer>
  );
}

const ReserveInfoItemContainer = styled.section`
  ${FlexCenter}
  margin-top: 30px;
`;
const ReserveInfoItemInner = styled.div`
  ${FlexBetween}
  width: 1250px;
`;

const ReserveInfoItemBox = styled.div`
  ${FlexColumn}
  width: 750px;
  height: 400px;
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

export default ReserveInfoItem;
