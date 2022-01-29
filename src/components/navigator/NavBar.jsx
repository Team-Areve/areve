import React, { useState } from "react";
import styled from "styled-components";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = (e) => {
    setIsOpen(!isOpen);
  };

  return <div></div>;
}

const Nav = styled.div``;

export default NavBar;
