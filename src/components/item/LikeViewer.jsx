import React from "react";
import styled from "styled-components";
import { FavoriteIcon } from "../../assets/icons";

function LikeViewer(props) {
  return (
    <Wrapper>
      <FavoriteIcon
        width="20px"
        height="20px"
        fill={props.liked}
      ></FavoriteIcon>
      <Count>{props.like}</Count>
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

const Count = styled.div`
  margin-bottom: 2px;
  height: 30px;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
`;

export default LikeViewer;
