import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBack } from "assets/icons";
import { Link } from "react-router-dom";
import { palette } from "lib/styles/palette";
import { UnLoggedInSideMenuData } from "./UnLoggedInSideMenuData";
import { LoggedInSideMenuData } from "./LoggedInSideMenuData";

function NavBar() {
  const numBookmark = 0;
  const numChat = 0;
  const numReview = 0;

  return (
    <Nav>
      <BackBtn>
        <ArrowBack width="30px" height="30px"></ArrowBack>
      </BackBtn>
      <Link to="login">
        <LogIn>
          <ProfileImg />
          <UserName>로그인/회원가입</UserName>
        </LogIn>
      </Link>
      <div
        style={{
          width: "400px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          borderBottom: "1px solid #cbcbcb",
          backgroundColor: "white",
        }}
      >
        <NumberItem>
          <Num>{numBookmark}</Num>
          <NumText>찜</NumText>
        </NumberItem>
        <NumberItem>
          <Num>{numChat}</Num>
          <NumText>채팅</NumText>
        </NumberItem>
        <NumberItem>
          <Num>{numReview}</Num>
          <NumText>후기</NumText>
        </NumberItem>
      </div>
      <ul style={{ backgroundColor: "white" }}>
        {UnLoggedInSideMenuData.map((item, index) => {
          return (
            <Item key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span style={{ fontSize: "20px", marginLeft: "20px" }}>
                  {item.title}
                </span>
              </Link>
            </Item>
          );
        })}
      </ul>
      <Footer>Designed By Team Areve</Footer>
    </Nav>
  );
}

const Nav = styled.aside`
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  z-index: 1050;
  background-color: #f5f5f5;
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

const NumberItem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Num = styled.div`
  font-size: 35px;
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumText = styled.div`
  font-size: 20px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  width: 400px;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;
  display: flex;
  align-items: center;
`;

const Footer = styled.div`
  font-size: 10px;
  width: 400px;
  height: 50px;
  color: #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;

export default NavBar;
