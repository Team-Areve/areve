import React from "react";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./lib/styles/globalStyles";
import HorizontalSmall from "./components/item/HorizontalSmall";
import Horizontal from "./components/item/Horizontal";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <MainPage></MainPage> */}
      <HorizontalSmall isSmall="true" isLiked="true"></HorizontalSmall>
      {/* <Horizontal isSmall="true" isLiked="true"></Horizontal> */}
    </>
  );
}

export default App;
