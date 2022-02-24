import { Star } from 'assets/icons';
import { palette } from 'lib/styles/palette';
import { FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import DetailDateInput from './DetailDateInput';

function DetailReserveBox() {
  return (
    <DetailReserveBoxContainer>
      <DetailReserveBoxWrapper>
        <DetailReserveBoxPrice>175,370원/일</DetailReserveBoxPrice>
        <DetailReserveBoxStar>
          <Star width="20px" height="20px" fill="orange" />
          4.89
        </DetailReserveBoxStar>
        <DetailReserveBoxReview>후기 99+</DetailReserveBoxReview>
      </DetailReserveBoxWrapper>
      <DetailDateInput />
    </DetailReserveBoxContainer>
  );
}

const DetailReserveBoxContainer = styled.div`
  position: fixed;
  width: 450px;
  height: 500px;
  border: 1px solid ${palette.MainColor};
  border-radius: 10px;
`;

const DetailReserveBoxWrapper = styled.div`
  ${FlexJustifyCenter}
`;

const DetailReserveBoxPrice = styled.span`
  font-size: 25px;
`;

const DetailReserveBoxStar = styled.div`
  font-size: 20px;
`;
const DetailReserveBoxReview = styled.span`
  font-size: 20px;
`;

export default DetailReserveBox;
