import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';
import MainListItem from './MainListItem';

function MainList() {
  const abc = [
    {
      name: '인기',
    },
    {
      name: '최신',
    },
    { name: '찜' },
  ];
  return (
    <MainListBlock>
      <MainListInner>
        <MainListMenu>
          {abc.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
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

const MainListItemBlock = styled.ul`
  margin-top: 16px;
`;

export default MainList;
