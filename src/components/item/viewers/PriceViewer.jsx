import React from "react";
import styled from "styled-components";
import { palette } from "../../../lib/styles/palette";

function PriceViewer(props) {
  const fontSize = props.isSmall ? { fontSize: "15px" } : { fontSize: "20px" };
  return <Price style={fontSize}>{props.price}</Price>;
}

const Price = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  color: ${palette.MainColor};
`;

export default PriceViewer;
