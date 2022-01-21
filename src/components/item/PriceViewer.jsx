import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette";

function PriceViewer(props) {
  return <Price>{props.price}</Price>;
}

const Price = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  color: ${palette.MainColor};
`;

export default PriceViewer;
