import { palette } from 'lib/styles/palette';
import { FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ReviewRating() {
  const rating = 4.89;

  return <ReviewRatingContainer>{rating}점</ReviewRatingContainer>;
}

const ReviewRatingContainer = styled.section`
  ${FlexJustifyCenter}
  font-size: 30px;
  color: ${palette.MainColor};
  margin-top: 88px;
`;

export default ReviewRating;
