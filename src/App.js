import React, {useState} from "react";
import GlobalStyles from "lib/styles/globalStyles";
import Routing from "routes/Routing";
import Header from "components/main/Header";
import NavBar from "components/navigator/NavBar";

function App() {
	const [toggled, setToggled] = useState(false);

	const getToggled = (value) => {
		setToggled(value);
	};

  return (
    <>
      <GlobalStyles />
			<Header getToggled={getToggled} />
			<NavBar toggled={toggled} getToggled={getToggled} />
      <Routing />
    </>
  );
}

export default App;
