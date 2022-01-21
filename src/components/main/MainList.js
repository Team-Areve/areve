import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function MainList() {
  return (
    <MainListBlock>
      <MainListInner>
        <MainListMenu>
          <li>인기</li>
          <li>최신</li>
          <li>찜</li>
        </MainListMenu>
        <MainListItemBlock>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
        </MainListItemBlock>
      </MainListInner>
    </MainListBlock>
  );
}

const MainListBlock = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 93px;
`;

const MainListInner = styled.div``;

const MainListMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 980px;
  height: 50px;
  border-bottom: 1px solid ${palette.MainColor};

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 50px;
    font-size: 22px;
  }
  li: hover {
    background-color: ${palette.MainColor};
    color: white;
  }
`;

const MainListItemBlock = styled.ul``;

const MainListItem = styled.li`
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
  background-color: green;
`;

export default MainList;
