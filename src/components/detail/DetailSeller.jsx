import Button from 'components/common/Button';
import {
  DetailContainer,
  FlexAlignCenter,
  FlexRow,
} from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import DetailH3 from './DetailH3';

function DetailSeller() {
  return (
    <DetailContainer>
      <DetailH3>판매자 정보</DetailH3>
      <DetailSellerInner>
        <DetailSellerProfile>
          <DetailSellerimg></DetailSellerimg>
          <DetailSellerNickname>판매자 닉네임</DetailSellerNickname>
        </DetailSellerProfile>
        <Button variant="primary" width="150px" height="50px">
          채팅하기
        </Button>
      </DetailSellerInner>
    </DetailContainer>
  );
}

const DetailSellerInner = styled.div`
  ${FlexRow}
  justify-content : space-between;
  align-items: center;
  margin-top: 20px;
`;

const DetailSellerProfile = styled.div`
  ${FlexRow}
`;

const DetailSellerimg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: gray;
`;

const DetailSellerNickname = styled.span`
  ${FlexAlignCenter}
  margin-left: 35px;
  font-size: 25px;
`;

export default DetailSeller;
