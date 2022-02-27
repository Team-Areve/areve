import { palette } from 'lib/styles/palette';
import { DetailContainer, FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailRecommendation() {
  return (
    <DetailContainer>
      <DetailRecommendationH3>이건 어떤신가요?</DetailRecommendationH3>
      <DetailRecommendationList>
        <DetailRecommendationItem>아이템1</DetailRecommendationItem>
        <DetailRecommendationItem>아이템2</DetailRecommendationItem>
        <DetailRecommendationItem>아이템3</DetailRecommendationItem>
      </DetailRecommendationList>
    </DetailContainer>
  );
}

const DetailRecommendationH3 = styled.h3`
  font-size: 30px;
  color: ${palette.MainColor};
`;

const DetailRecommendationList = styled.ol`
  ${FlexRow}
  margin-top: 20px;
`;

const DetailRecommendationItem = styled.div``;
export default DetailRecommendation;
