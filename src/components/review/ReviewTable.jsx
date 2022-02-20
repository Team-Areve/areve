import { FlexJustifyCenter, FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import ReviewTableColumn from './ReviewTableColumn';

function ReviewTable() {
  const positive = [
    {
      rate: 4,
      comment: '좋았다',
      reviewnumber: 1,
    },
    {
      rate: 5,
      comment: '가나다라마바사',
      reviewnumber: 2324,
    },
    {
      rate: 3,
      comment: '평균',
      reviewnumber: 234,
    },
  ];

  const negative = [
    {
      rate: 2,
      comment: '별로',
      reviewnumber: 2134,
    },
    {
      rate: 1,
      comment: '가나다라마바사',
      reviewnumber: 25634,
    },
  ];
  return (
    <ReviewTableContainer>
      <ReviewTableInner>
        <ReviewTableColumn review={positive}>긍정적 평가 :)</ReviewTableColumn>
        <ReviewTableColumn review={negative}>부정적 평가 :(</ReviewTableColumn>
      </ReviewTableInner>
    </ReviewTableContainer>
  );
}

const ReviewTableContainer = styled.section`
  ${FlexJustifyCenter}
`;

const ReviewTableInner = styled.div`
  ${FlexRow}
  justify-content:space-between;
  width: 1250px;
`;

export default ReviewTable;
