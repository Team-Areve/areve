import { FlexRow } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function DetailImg() {
  return (
    <DetailImgContainer>
      <DetailMainImg></DetailMainImg>
      <DetailImgList>
        <DetailSubImg></DetailSubImg>
        <DetailSubImg></DetailSubImg>
        <DetailSubImg></DetailSubImg>
        <DetailSubImg></DetailSubImg>
      </DetailImgList>
    </DetailImgContainer>
  );
}

const DetailImgContainer = styled.article`
  margin-top: 60px;
  height: 630px;
`;

const DetailMainImg = styled.div`
  width: 750px;
  height: 500px;
  background-color: gray;
`;

const DetailImgList = styled.div`
  ${FlexRow}
  margin-top: 30px;
`;

const DetailSubImg = styled.div`
  width: 150px;
  height: 100px;
  margin-right: 20px;
  background-color: gray;
`;

export default DetailImg;
