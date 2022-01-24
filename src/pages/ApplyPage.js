import React from 'react';
import styled from 'styled-components';
import Header from 'components/main/Header';

function ApplyPage() {
  return (
    <>
      <Header></Header>
      <ApplyImg>
        <div>
          <h3>사진</h3>
          <span>*</span>
        </div>
        <div></div>
        <div></div>
      </ApplyImg>
    </>
  );
}

const ApplyLayout = styled.div``;
const ApplyImg = styled.section``;
const ApplyTitle = styled.section``;
const ApplyCategory = styled.section``;
const ApplyLocation = styled.section``;
const ApplyPrice = styled.section``;
const ApplyDetail = styled.section``;
const ApplyCaution = styled.section``;
const ApplyCheck = styled.section``;

export default ApplyPage;
