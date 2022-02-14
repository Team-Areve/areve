import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBack, Setting } from "assets/icons";
import { Link } from "react-router-dom";
import { palette } from "lib/styles/palette";
import { UnLoggedInSideMenuData } from "./UnLoggedInSideMenuData";
import { LoggedInSideMenuData } from "./LoggedInSideMenuData";

function NavBar() {
  const numBookmark = 0;
  const numChat = 0;
  const numReview = 0;

  return (
    <Layout>
      <Nav>
        <BackBtn>
          <ArrowBack width="30px" height="30px"></ArrowBack>
        </BackBtn>
        <MyPage>
          {/* 온클릭하면 네비바 사라지게  */}
          <Link to="/mypage">
            <Setting width="30px" height="30px"></Setting>
          </Link>
        </MyPage>
        <Link to="/login">
          <LogIn>
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
    </Layout>
  );
}

const Layout = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Nav = styled.aside`
  width: 400px;
  height: 100%;
  top: 0px;
  bottom: 0px;
  background-color: #f5f5f5;
`;

const MyPage = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 350px;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogIn = styled.div`
  width: 400px;
  height: 200px;
  background-color: ${palette.MainColor};
  display: flex;
  justify-content: center;
  align-items: center;
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
