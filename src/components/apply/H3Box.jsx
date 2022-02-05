import React from "react";
import styled from "styled-components";

function H3Box({ children, ...rest }) {
  return (
    <H3Container {...rest}>
      <h3>{children}</h3>
      <span>*</span>
    </H3Container>
  );
}

const H3Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  width: 170px;
  height: 50px;
  span {
    color: red;
  }
`;

export default H3Box;
