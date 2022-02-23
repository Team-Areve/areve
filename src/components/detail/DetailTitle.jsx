import H2Box from 'components/common/H2Box';
import { palette } from 'lib/styles/palette';
import { FlexJustifyCenter, FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailTitle() {
  return (
    <>
      <DetailName>홍대/합정 자연광, 호리존트, 한강뷰 PACS Studio</DetailName>
      <DetailCateoryList>
        <DetailCategory>주거·아파트</DetailCategory>
        <DetailCategory>용현동</DetailCategory>
      </DetailCateoryList>
    </>
  );
}
const DetailName = styled.h2`
  margin-top: 70px;
  font-size: 40px;
`;

const DetailCateoryList = styled.ul`
  ${FlexRow}
`;
const DetailCategory = styled.li`
  ${FlexJustifyCenter};
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top: 40px;
  margin-right: 20px;
  font-size: 30px;
  border: 1px solid ${palette.MainColor};
`;
export default DetailTitle;
