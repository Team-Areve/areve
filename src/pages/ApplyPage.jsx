import React from 'react';
import Header from 'components/main/Header';
import { PageLayout } from 'lib/styles/utilStyles';
import H2Container from 'components/common/H2Box';
import ApplyTitle from 'components/apply/ApplyTitle';
import ApplyImage from 'components/apply/ApplyImage';
import ApplyCategory from 'components/apply/ApplyCategory';
import ApplyLocation from 'components/apply/ApplyLocation';
import ApplyPrice from 'components/apply/ApplyPrice';
import ApplyDetail from 'components/apply/ApplyDetail';
import ApplyCaution from 'components/apply/ApplyCaution';
import ApplyCheck from 'components/apply/ApplyCheck';
import ApplyButton from 'components/apply/ApplyButton';

function ApplyPage() {
  return (
    <>
      <Header />
      <PageLayout>
        <H2Container>등록하기</H2Container>
        <ApplyImage />
        <ApplyTitle />
        <ApplyCategory />
        <ApplyLocation />
        <ApplyPrice />
        <ApplyDetail />
        <ApplyCaution />
        <ApplyCheck />
        <ApplyButton />
      </PageLayout>
    </>
  );
}

export default ApplyPage;
