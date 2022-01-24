import React from 'react';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import GlobalStyles from 'lib/styles/globalStyles';
import ApplyPage from 'pages/ApplyPage';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <MainPage /> */}
      <ApplyPage></ApplyPage>
    </>
  );
}

export default App;
