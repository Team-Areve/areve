import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function MainListItem() {
  return (
    <MainListItemContainer>
      <MainListItemInfo>
        <span className="Type"></span>

        <Type>주거 아파트</Type>
        <Location>용현동 인하대학교 60주년 기념관 201호</Location>
        <Price>4000원/시간</Price>
        <Rate>5.0</Rate>
        <Review>1</Review>
        <Like>1</Like>
      </MainListItemInfo>
    </MainListItemContainer>
  );
}

const MainListItemContainer = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 950px;
  height: 333px;
  margin: 0 0 30px 3px;
  border-radius: 10px;
  border: solid 1px #6667ab;
  background-color: whitesmoke;
`;

const MainListItemInfo = styled.div`
  width: 358px;
  height: 333px;
  padding: 15px 0 3px 10px;
  background-color: silver;
`;

const Type = styled.span`
  width: 150px;
  height: 30px;
  flex-grow: 0;
  margin: 0 10px 55px 5px;
  border: solid 1px #6667ab;
`;

const Location = styled.span`
  width: 348px;
  height: 43px;
  margin: 55px 0 157px;
  font-family: Roboto;
  font-size: 25px;
`;

const Price = styled.span`
  width: 135px;
  height: 30px;
  margin: 157px 30px 0 0;
  color: ${palette.MainColor};
`;

const Rate = styled.span``;

const Review = styled.span``;

const Like = styled.span``;

export default MainListItem;
