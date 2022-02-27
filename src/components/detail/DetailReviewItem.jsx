import { Star } from 'assets/icons';
import {
  DetailContainer,
  FlexAlignCenter,
  FlexRow,
} from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailReviewItem() {
  return (
    <DetailContainer>
      <DetailReviewInfo>
        <DetailReviewProfile>
          <DetailReviewImg></DetailReviewImg>
          <DetailReviewNickname>닉네임</DetailReviewNickname>
        </DetailReviewProfile>
        <DetailReviewRate>
          <Star width="25px" height="25px" fill="orange" />
          <Star width="25px" height="25px" fill="orange" />
          <Star width="25px" height="25px" fill="orange" />
          <Star width="25px" height="25px" fill="orange" />
          <Star width="25px" height="25px" fill="orange" />
        </DetailReviewRate>
      </DetailReviewInfo>
      <DetailReviewText>
        이거 몇 줄 이상은 자세히 보기로 일단은 아이템 사이 여백 20px
      </DetailReviewText>
    </DetailContainer>
  );
}

const DetailReviewInfo = styled.div`
  ${FlexRow}
  justify-content : space-between;
`;

const DetailReviewProfile = styled.div`
  ${FlexRow}
`;

const DetailReviewImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100px; ;
`;

const DetailReviewNickname = styled.span`
  margin-left: 20px;
  ${FlexAlignCenter}
`;

const DetailReviewRate = styled.div`
  ${FlexAlignCenter}
`;

const DetailReviewText = styled.div`
  width: 600px;
  height: 100px;
  margin: 20px 0 0 70px;
`;

export default DetailReviewItem;
