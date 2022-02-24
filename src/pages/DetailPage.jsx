import DetailReserveBox from 'components/detail/DetailReserveBox';
import DetailTitle from 'components/detail/DetailTitle';
import { FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailPage() {
  return (
    <MainLayout>
      <DetailTitle></DetailTitle>
      <DetailContainer>
        <DetailMain></DetailMain>
        <DetailReserveBoxPath>
          <DetailReserveBox></DetailReserveBox>
        </DetailReserveBoxPath>
      </DetailContainer>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

const DetailContainer = styled.div`
  ${FlexRow}
`;
const DetailWrapper = styled.div``;
const DetailMain = styled.section`
  width: 750px;
  height: 4344px;
  margin-right: 50px;
  background-color: gray;
`;

const DetailReserveBoxPath = styled.aside``;

export default DetailPage;
