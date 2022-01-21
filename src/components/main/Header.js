import { Hamburger } from 'assets/icons';
// import { Logo } from 'assets/images';
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderBlock>
      <HeaderInner>
        <H1>
          <a>{/* <Logo></Logo> */}</a>
        </H1>
        <RightMenu>
          <Share>공유하기</Share>
          <NavManu>
            <Hamburger></Hamburger>
          </NavManu>
        </RightMenu>
      </HeaderInner>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;

  /* width: 100%;
    min-width: 768px;
    height: 78px;
    top: 0;
    z-index: 110;
    background: #fff;
    color: #000; */

  /* justify-content: space-between; */
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  height: 100px;
  /* vertical-align : center; */

  border-bottom: 1px solid #f6f6f6;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Share = styled.button`
  margin-right: 23.8px;
  font-size: 25px;
`;
const NavManu = styled.button``;

export default Header;
