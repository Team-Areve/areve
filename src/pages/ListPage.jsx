import Footer from 'components/common/Footer';
import H2Box from 'components/common/H2Box';
import ItemList from 'components/list/ItemList';
import ListFilter from 'components/list/ListFilter';
import Header from 'components/main/Header';
import { PageLayout } from 'lib/styles/utilStyles';
import React from 'react';
function ListPage() {
  return (
    <>
      <Header />
      <PageLayout>
        <H2Box>주거</H2Box>
        <ListFilter></ListFilter>
        <ItemList></ItemList>
      </PageLayout>
      <Footer />
    </>
  );
}

export default ListPage;
