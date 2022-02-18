import H3Box from 'components/common/H3Box';
import { palette } from 'lib/styles/palette';
import { FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReserveCaution() {
  return (
    <ReserveCautionContainer>
      <ReserveCautionInner>
        <ReserveCautionBox>
          <H3Box variant="h3" height="50px">
            주의사항
          </H3Box>
          <ReserveCautionOl>
            <li>1. 주의사항</li>
            <li>2. 주의사항</li>
            <li>3. 주의사항</li>
            <li>4. 주의사항</li>
            <li>5. 주의사항</li>
          </ReserveCautionOl>
        </ReserveCautionBox>
      </ReserveCautionInner>
    </ReserveCautionContainer>
  );
}
const ReserveCautionContainer = styled.section`
  ${FlexJustifyCenter}
  margin-top: 30px;
`;

const ReserveCautionInner = styled.div`
  width: 1250px;
`;
const ReserveCautionBox = styled.div`
  width: 750px;
`;

const ReserveCautionOl = styled.ol`
  color: ${palette.grayDarker};
  margin-top: 10px;

  li {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export default ReserveCaution;
