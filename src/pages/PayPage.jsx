import React from 'react';
import Header from '../components/main/Header';
import styled from 'styled-components';
import Footer from 'components/common/Footer';

function PayPage() {
  return (
    <>
      <Header />
      <MainLayout>
        <Footer />
      </MainLayout>
    </>
  );
}

const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

export default PayPage;
