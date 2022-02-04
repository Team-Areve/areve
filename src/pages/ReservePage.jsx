import React from 'react';
import Header from '../components/main/Header';
import { PageLayout } from 'lib/styles/utilStyles';
import H2Box from 'components/common/H2Box';
import ReserveInfo from 'components/reserve/ReserveInfo';
import ReserveCaution from 'components/reserve/ReserveCaution';
import ReserveOrderInfo from 'components/reserve/ReserveOrderInfo';

function ReservePage() {
  return (
    <>
      <Header />
      <PageLayout>
        <H2Box>예약하기</H2Box>
        <ReserveInfo />
        <ReserveCaution />
        <ReserveOrderInfo />
      </PageLayout>
    </>
  );
}

export default ReservePage;