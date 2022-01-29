import React, { useState } from "react";
import styled from "styled-components";
import { Hamburger, ArrowBack } from "assets/icons";
import { Link } from "react-router-dom";
import { palette } from "lib/styles/palette";

const windowHeight = window.innerHeight;

function NavBar() {
  return (
    <Nav>
      <BackBtn>
        <ArrowBack width="30px" height="30px"></ArrowBack>
      </BackBtn>
      <Link to="login">
        <LogIn>
          <ProfileImg />
          <UserName>"로그인/회원가입"</UserName>
        </LogIn>
      </Link>
    </Nav>
  );
}

const Nav = styled.aside`
  width: 400px;
  height: 500px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  z-index: 1050;
`;

const LogIn = styled.div`
  width: 400px;
  height: 200px;
  background-color: ${palette.MainColor};
`;

const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: white;
  position: relative;
  left: 30px;
  top: 50px;
`;

const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 350px;
`;

const UserName = styled.span`
  font-size: 25px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  position: absolute;
  left: 150px;
  top: 50px;
`;

export default NavBar;
