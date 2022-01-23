import { Hamburger } from 'assets/icons';
import Logo from 'assets/images/Logo.png';
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderBlock>
      <HeaderInner>
        <H1>
          <a>
            <LogoImg src={Logo} />
          </a>
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
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  height: 100px;
  border-bottom: 1px solid #f6f6f6;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  background-image: Logo;
`;

const LogoImg = styled.img`
  width: 250px;
  height: 93.5px;
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
