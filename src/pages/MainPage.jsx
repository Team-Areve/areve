import React from 'react';
import Header from '../components/main/Header';
import styled from 'styled-components';
import Category from '../components/main/Category';
import MainList from 'components/main/MainList';
import Footer from 'components/common/Footer';
import MainSearch from 'components/main/MainSearch';

function MainPage() {
  return (
    <MainLayout>
      <Header />
      <MainSearch />
      <Category />
      <MainList />
      <Footer />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

export default MainPage;
