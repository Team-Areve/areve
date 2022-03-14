import React, { createContext, useEffect, useState } from 'react';
import GlobalStyles from 'lib/styles/globalStyles';
import Routing from 'routes/Routing';
import Header from 'components/main/Header';
import NavBar from 'components/navigator/NavBar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getMenuToggled = (value) => {
    setIsMenuOpen(value);
  };
  useEffect(() => {
    
  document.body.style.zoom = 0.8
  }, [])
  

  const Test = createContext(null);

  return (
    <Test.Provider value={'abc'}>
      <GlobalStyles />
      <Header getMenuToggled={getMenuToggled} />
      {isMenuOpen ? <NavBar getMenuToggled={getMenuToggled} /> : <></>}
      <Routing />
    </Test.Provider>
  );
}

export default App;
