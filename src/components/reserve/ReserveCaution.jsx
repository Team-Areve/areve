import H3Box from 'components/common/H3Box';
import { palette } from 'lib/styles/palette';
import { FlexCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveCaution() {
  return (
    <ReserveCautionContainer>
      <ReserveCautionInner>
        <ReserveCautionBox>
          <H3Box height="50px">주의사항</H3Box>
          <ol>
            <li>주의사항</li>
            <li>주의사항</li>
            <li>주의사항</li>
            <li>주의사항</li>
            <li>주의사항</li>
          </ol>
        </ReserveCautionBox>
      </ReserveCautionInner>
    </ReserveCautionContainer>
  );
}
const ReserveCautionContainer = styled.section`
  ${FlexCenter}
  margin-top: 30px;
`;

const ReserveCautionInner = styled.div`
  width: 1250px;
`;
const ReserveCautionBox = styled.div`
  width: 750px;

  ol {
    color: ${palette.grayDarker};
    margin-top: 10px;
  }
`;

export default ReserveCaution;
