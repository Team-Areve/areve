import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette";

function CategoryViewer(props) {
  const style = props.isSmall
    ? { height: { height: "20px" }, fontSize: { fontSize: "13px" } }
    : { height: { height: "30px" }, fontSize: { fontSize: "18px" } };

  return (
    <Wrapper style={style.height}>
      <Text style={style.fontSize}>{props.text}</Text>
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
`;

export default CategoryViewer;
