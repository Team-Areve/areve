import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import { FlexCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveClientInfo() {
  return (
    <ReserveClientInfoContainer>
      <ReserveClientInfoInner>
        <ReserveClientInfoBox>
          <H3Box height="50px">주문자 정보</H3Box>
          <div>
            <h4>예약자</h4>
            <Input width="550px" height="50px"></Input>
          </div>
        </ReserveClientInfoBox>
      </ReserveClientInfoInner>
    </ReserveClientInfoContainer>
  );
}
const ReserveClientInfoContainer = styled.section`
  ${FlexCenter}
  margin-top: 30px;
`;

const ReserveClientInfoInner = styled.div`
  width: 1250px;
`;

const ReserveClientInfoBox = styled.div`
  width: 750px;
  h4 {
    margin-top: 10px;
  }
`;

export default ReserveClientInfo;
