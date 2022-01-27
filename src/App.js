import React from 'react';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import GlobalStyles from 'lib/styles/globalStyles';
import ApplyPage from 'pages/ApplyPage';
import Routing from 'routes/Routing';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routing />
    </>
  );
}

export default App;
