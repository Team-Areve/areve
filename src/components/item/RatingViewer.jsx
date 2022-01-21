import React from "react";
import styled from "styled-components";
import { Star } from "../../assets/icons";

function RatingViewer(props) {
  return (
    <Wrapper>
      <Star width="20px" height="20px" fill="#FFB800"></Star>
      <Rate>{props.rating}</Rate>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 61px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Rate = styled.div`
  margin-bottom: 1px;
  height: 30px;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
`;

export default RatingViewer;
