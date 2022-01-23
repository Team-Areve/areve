import React from "react";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./lib/styles/globalStyles";
import Horizontal from "./components/item/Horizontal";
import HorizontalSmall from "./components/item/HorizontalSmall";
import Vertical from "./components/item/Vertical";
import VerticalSmall from "./components/item/VerticalSmall";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <MainPage></MainPage> */}
      <Horizontal isLiked="true"></Horizontal>
      <br></br>
      <hr></hr>
      <br></br>
      <HorizontalSmall isLiked="false"></HorizontalSmall>
      <br></br>
      <hr></hr>
      <br></br>
      <Vertical isLiked="true"></Vertical>
      <br></br>
      <hr></hr>
      <br></br>
      <VerticalSmall isLiked="true"></VerticalSmall>
    </>
  );
}

export default App;
