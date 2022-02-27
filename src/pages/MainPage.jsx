import React from 'react';
import styled from 'styled-components';
import MainSearch from 'components/main/MainSearch';
import Category from '../components/main/Category';
import MainList from 'components/main/MainList';
import Footer from 'components/common/Footer';
import { PageLayout } from 'lib/styles/utilStyles';

function MainPage() {
  return (
    <PageLayout>
      <MainSearch />
      <Category />
      <MainList />
      <Footer />
    </PageLayout>
  );
}

export default MainPage;
