import React from 'react';
import styled from 'styled-components';
import Header from 'components/main/Header';
import Input from 'components/common/Input';
import H3Box from 'components/apply/H3Box';
import { palette } from 'lib/styles/palette';
import Button from 'components/common/Button';
import { FlexCenter, FlexColumn, Inner } from 'lib/styles/utilStyles';
import H2Container from 'components/apply/H2Container';

function ApplyPage() {
  return (
    <>
      <Header />
      <ApplyLayout>
        <H2Container>등록하기</H2Container>
        <FlexCenter>
          <Inner>
            <H3Box>사진</H3Box>
          </Inner>
        </FlexCenter>
        <FlexCenter>
          <Inner>
            <H3Box>제목</H3Box>

            <Input width={'1020px'} height={'50px'} />
          </Inner>
        </FlexCenter>
        <ApplyCategory>
          <Inner>
            <H3Box>카테고리</H3Box>
            <select name="category">
              <option value="">선택하세요</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </Inner>
        </ApplyCategory>
        <ApplyLocation>
          <Inner>
            <H3Box>위치</H3Box>

            <div>
              <div>
                <button>내 위치</button>
                <button>주소 검색</button>
              </div>
              <Input width={'1080px'} height={'50px'} />
              <Input width={'1080px'} height={'50px'} />
            </div>
          </Inner>
        </ApplyLocation>
        <ApplyPrice>
          <Inner>
            <H3Box>가격</H3Box>

            <Input width={'250px'} height={'50px'} />
            <select name="">
              <option value="">가격/시간</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </Inner>
        </ApplyPrice>
        <ApplyDetail>
          <Inner>
            <H3Box>상세설명</H3Box>

            <Input width={'1080px'} height={'230px'} />
          </Inner>
        </ApplyDetail>
        <ApplyCaution>
          <Inner>
            <H3Box>주의사항</H3Box>

            <FlexColumn>
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
            </FlexColumn>
          </Inner>
        </ApplyCaution>
        <ApplyCheck>
          <Inner>
            <form>
              <label>
                <input type={'checkbox'} /> 동의?
              </label>
              <label>
                <input type={'checkbox'} /> 보감
              </label>
            </form>
          </Inner>
        </ApplyCheck>
        <Apply>
          <ApplyInner>
            <Button width={'150px'} height={'60px'}>
              등록하기
            </Button>
          </ApplyInner>
        </Apply>
      </ApplyLayout>
    </>
  );
}

const ApplyLayout = styled.div`
  margin-top: 70px;
  /* > div {

    div {
      width: 1250px;
      padding-bottom: 30px;
      border-bottom: 1px solid black;
    }
  } */
`;

const ApplyCategory = styled.section`
  display: flex;
  justify-content: center;

  select {
    width: 1080px;
    height: 50px;
  }
`;
const ApplyLocation = styled.section`
  display: flex;
  justify-content: center;
`;
const ApplyPrice = styled.section`
  display: flex;
  justify-content: center;
`;
const ApplyDetail = styled.section`
  display: flex;
  justify-content: center;
`;
const ApplyCaution = styled.section`
  display: flex;
  justify-content: center;
  input {
    margin-bottom: 10px;
  }
`;
const ApplyCheck = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Apply = styled.section`
  display: flex;
  justify-content: center;
`;

const ApplyInner = styled(Inner)`
  justify-content: flex-end;
`;

export default ApplyPage;
