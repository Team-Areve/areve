import React from 'react';
import styled from 'styled-components';
import Header from 'components/main/Header';
import Input from 'components/common/Input';
import H3 from 'components/common/H3';
import App from 'App';
import axios from 'axios';

function ApplyPage() {
  return (
    <>
      <Header />
      <ApplyLayout>
        <div className="H2">
          <div>등록하기</div>
        </div>
        <ApplyImg>
          <div>
            <H3Box>
              <h3>사진</h3>
              <span>*</span>
            </H3Box>
            <div></div>
            <div></div>
          </div>
        </ApplyImg>
        <ApplyTitle>
          <div>
            <H3Box>
              <h3>제목</h3>
              <span>*</span>
            </H3Box>
            <Input width={'1020px'} height={'50px'} />
          </div>
        </ApplyTitle>
        <ApplyCategory>
          <div>
            <H3Box>
              <h3>카테고리</h3>
              <span>*</span>
            </H3Box>
            <select></select>
          </div>
        </ApplyCategory>
        <ApplyLocation>
          <div>
            <H3Box>
              <h3>위치</h3>
              <span>*</span>
            </H3Box>
            <button></button>
            <button></button>
            <Input width={'1080px'} height={'50px'} />
            <Input width={'1080px'} height={'50px'} />
          </div>
        </ApplyLocation>
        <ApplyPrice>
          <div>
            <H3Box>
              <h3>가격</h3>
              <span>*</span>
            </H3Box>
            <Input width={'250px'} height={'50px'} />
            <select></select>
          </div>
        </ApplyPrice>
        <ApplyDetail>
          <div>
            <H3Box>
              <h3>상세설명</h3>
              <span>*</span>
            </H3Box>
            <Input width={'1080px'} height={'230px'} />
          </div>
        </ApplyDetail>
        <ApplyCaution>
          <div>
            <H3Box>
              <h3>주의사항</h3>
              <span>*</span>
            </H3Box>
            <Input width={'1020px'} height={'50px'} />
            <Input width={'1020px'} height={'50px'} />
            <Input width={'1020px'} height={'50px'} />
            <Input width={'1020px'} height={'50px'} />
            <Input width={'1020px'} height={'50px'} />
          </div>
        </ApplyCaution>
        <ApplyCheck></ApplyCheck>
      </ApplyLayout>
    </>
  );
}

const ApplyLayout = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 70px;

  /* .H2 {
    div {
      display: flex;
      justify-content: center;
    }
  }
  .center {
    display: flex;
    justify-content: center;
  }
  div {
    display: block;
    border-bottom: 1px solid #f6f6f6;
  } */
`;

const H3Box = styled.div`
  width: 170px;
  height: 32px;
  h3 {
    display: inline-block;
  }
`;
const ApplyImg = styled.section`
  display: flex;
  justify-content: center;
`;
const ApplyTitle = styled.section`
  display: flex;
  justify-content: center;
`;
const ApplyCategory = styled.section``;
const ApplyLocation = styled.section``;
const ApplyPrice = styled.section``;
const ApplyDetail = styled.section``;
const ApplyCaution = styled.section``;
const ApplyCheck = styled.section``;

export default ApplyPage;
