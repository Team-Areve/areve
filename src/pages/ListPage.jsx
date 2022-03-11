import Footer from 'components/common/Footer';
import H2Box from 'components/common/H2Box';
import ItemList from 'components/list/ItemList';
import ListFilter from 'components/list/ListFilter';
import { PageLayout } from 'lib/styles/utilStyles';
import React from 'react';
import { categoryList } from 'lib/categoryList';
import { useSearchParams } from 'react-router-dom';

function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKey = searchParams.get('q');
  const category = searchParams.get('category');
  const catText = category !== null ? categoryList[category].text : '';

  return (
    <>
      <PageLayout>
        <H2Box>{searchKey === null ? catText : searchKey}</H2Box>
        <ListFilter></ListFilter>
        <ItemList
          catNum={category ? category : -1}
          catText={catText}
          searchKey={searchKey}
        ></ItemList>
      </PageLayout>
      <Footer />
    </>
  );
}

export default ListPage;
