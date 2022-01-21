import React from "react";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./lib/styles/globalStyles";
import Horizontal from "./components/item/Horizontal";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <MainPage></MainPage> */}
      <Horizontal small="false" liked="true"></Horizontal>
    </>
  );
}

export default App;
