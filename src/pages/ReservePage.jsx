import React from 'react';
import Header from '../components/main/Header';
import { PageLayout } from 'lib/styles/utilStyles';
import H2Box from 'components/common/H2Box';
import ReserveInfoItem from 'components/reserve/ReserveInfoItem';
import styled from 'styled-components';

function ReservePage() {
  return (
    <>
      <Header />
      <PageLayout>
        <H2Box>예약하기</H2Box>
        <ReserveInfo>
          <ReserveInfoItem></ReserveInfoItem>
        </ReserveInfo>
      </PageLayout>
    </>
  );
}

const ReserveInfo = styled.section``;

export default ReservePage;
