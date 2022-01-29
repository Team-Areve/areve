import Logo from "assets/images/Logo.png";
import React from "react";
import styled from "styled-components";
import { Hamburger } from "assets/icons";

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
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;
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
  width: 150px;
  height: 100px;
  font-size: 25px;
`;
const NavManu = styled.button`
  width: 100px;
  height: 100px;
`;

export default Header;
