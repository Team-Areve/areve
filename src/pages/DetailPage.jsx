import DetailTitle from 'components/detail/DetailTitle';
import React from 'react';
import styled from 'styled-components';

function DetailPage() {
  return (
    <MainLayout>
      <DetailTitle></DetailTitle>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

export default DetailPage;