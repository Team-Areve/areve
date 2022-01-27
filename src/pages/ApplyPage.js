import React from 'react';
import styled from 'styled-components';
import Header from 'components/main/Header';
import Input from 'components/common/Input';
import H3Box from 'components/apply/H3Box';
import { palette } from 'lib/styles/palette';

function ApplyPage() {
  return (
    <>
      <Header />
      <ApplyLayout>
        <div>
          <div>등록하기</div>
        </div>
        <ApplyImg>
          <Inner>
            <H3Box props={'사진'} />
          </Inner>
        </ApplyImg>
        <ApplyTitle>
          <Inner>
            <H3Box props={'제목'} />
            <Input width={'1020px'} height={'50px'} />
          </Inner>
        </ApplyTitle>
        <ApplyCategory>
          <Inner>
            <H3Box props={'카테고리'} />
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
            <H3Box props={'위치'} />
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
            <H3Box props={'가격'} />
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
            <H3Box props={'상세설명'} />
            <Input width={'1080px'} height={'230px'} />
          </Inner>
        </ApplyDetail>
        <ApplyCaution>
          <Inner>
            <H3Box props={'주의사항'} />
            <div>
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
              <Input width={'1020px'} height={'50px'} />
            </div>
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
          <button>등록하기</button>
        </Apply>
      </ApplyLayout>
    </>
  );
}

const ApplyLayout = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  margin-top: 70px;
  > div {
    font-size: 30px;
    color: ${palette.MainColor};
    display: flex;
    justify-content: center;
    div {
      width: 1250px;
      padding-bottom: 30px;
      border-bottom: 1px solid black;
    }
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

  /* div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  } */
`;
const ApplyCheck = styled.section`
  display: flex;
  justify-content: flex-end;

  label {
    display: block;
    margin-bottom: 10px;
  }
`;

const Apply = styled.section`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  margin: 30px 0;
  width: 1250px;
  border-bottom: 1px solid #f6f6f6;
  div {
    display: flex;
    flex-direction: column;
  }
`;
export default ApplyPage;
