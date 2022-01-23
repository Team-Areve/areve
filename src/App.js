import React from "react";
import GlobalStyles from "./lib/styles/globalStyles";
import ItemWithMap from "./components/item/ItemWithMap";

function App() {
  return (
    <>
      <GlobalStyles />
      <ItemWithMap isLiked={true}></ItemWithMap>
    </>
  );
}

export default App;
