import React from 'react';
import Header from '../components/main/Header';
import styled from 'styled-components';
import Search from '../components/search/Search';
import Category from '../components/main/Category';
import MainList from 'components/main/MainList';
import Footer from 'components/common/Footer';

const MainPage = () => {
  return (
    <MainLayout>
      <Header />
      <Search />
      <Category />
      <MainList />
      <Footer />
    </MainLayout>
  );
};

<<<<<<< HEAD
const MainLayout = styled.div``;
=======
const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;
>>>>>>> test_H

export default MainPage;
