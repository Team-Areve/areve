import React from "react";
import GlobalStyles from "./lib/styles/globalStyles";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <MainPage></MainPage> */}
      <RegisterPage></RegisterPage>
    </>
  );
}

export default App;
