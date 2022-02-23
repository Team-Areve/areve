import React, {useState} from "react";
import GlobalStyles from "lib/styles/globalStyles";
import Routing from "routes/Routing";
import Header from "components/main/Header";
import NavBar from "components/navigator/NavBar";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const getMenuToggled = (value) => {
		setIsMenuOpen(value);
	};

  return (
    <>
      <GlobalStyles />
			<Header getMenuToggled={getMenuToggled} />
			{isMenuOpen ? <NavBar getMenuToggled={getMenuToggled} /> : <></>}
      <Routing />
    </>
  );
}

export default App;
