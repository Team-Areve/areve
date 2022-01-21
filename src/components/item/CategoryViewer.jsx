import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette";

function CategoryViewer(props) {
  return (
    <Wrapper style={{ height: props.height }}>
      <Text>{props.text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Text = styled.span`
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${palette.MainColor};
  font-size: 18px;
`;

export default CategoryViewer;
