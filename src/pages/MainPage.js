import React from 'react';
import Header from '../components/main/Header';
import styled from 'styled-components';
import Search from '../components/main/Search';
import Category from '../components/main/Category';
import MainList from 'components/main/MainList';
import Footer from 'components/common/Footer';

const MainPage = () => {
  return (
    <MainLayout>
      <Header></Header>
      <Search></Search>
      <Category></Category>
      <MainList></MainList>
      <Footer></Footer>
    </MainLayout>
  );
};

const MainLayout = styled.div``;

export default MainPage;
