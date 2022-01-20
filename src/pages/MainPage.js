import React from "react";
import Header from "../components/main/Header";
import styled from "styled-components";
import Search from "../components/main/Search";
import Category from "../components/main/Category";

const MainPage = () => {
  return (
    <MainLayout>
      <Header></Header>
      <Search></Search>
      <Category></Category>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

export default MainPage;
