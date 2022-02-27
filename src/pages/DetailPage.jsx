import DetailImg from 'components/detail/DetailImg';
import DetailLocation from 'components/detail/DetailLocation';
import DetailMenu from 'components/detail/DetailMenu';
import DetailReserveBox from 'components/detail/DetailReserveBox';
import DetailReview from 'components/detail/DetailReview';
import DetailSeller from 'components/detail/DetailSeller';
import DetailText from 'components/detail/DetailText';
import DetailTitle from 'components/detail/DetailTitle';
import { FlexRow, PageLayout } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailPage() {
  return (
    <PageLayout>
      <DetailTitle></DetailTitle>
      <DetailContainer>
        <DetailMain>
          <DetailImg />
          <DetailMenu />
          <DetailText />
          <DetailLocation />
          <DetailReview />
          <DetailSeller />
        </DetailMain>
        <DetailReserveBoxPath>
          <DetailReserveBox></DetailReserveBox>
        </DetailReserveBoxPath>
      </DetailContainer>
    </PageLayout>
  );
}

const DetailContainer = styled.div`
  ${FlexRow}
`;
const DetailWrapper = styled.div``;
const DetailMain = styled.section`
  width: 750px;
  height: 4344px;
  margin-right: 50px;
`;

const DetailReserveBoxPath = styled.aside``;

export default DetailPage;
