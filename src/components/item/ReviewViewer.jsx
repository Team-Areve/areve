import React from "react";
import styled from "styled-components";
import { ReviewIcon } from "../../assets/icons";
import { palette } from "../../lib/styles/palette";

function ReviewViewer(props) {
  return (
    <Wrapper>
      <ReviewIcon
        width="20px"
        height="20px"
        fill={palette.MainColor}
      ></ReviewIcon>
      <Count>{props.review}</Count>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-right: -5px;
  width: 61px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Count = styled.span`
  margin-bottom: 2px;
  height: 30px;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
`;

export default ReviewViewer;
