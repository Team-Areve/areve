import React from "react";
import styled from "styled-components";
import { FavoriteIcon } from "../../../assets/icons";

function LikeViewer(props) {
  const style = props.isSmall
    ? {
        iconSize: "17px",
        wrapper: { height: "15px", width: "50px" },
        count: { height: "20px", fontSize: "15px" },
      }
    : {
        iconSize: "20px",
        wrapper: { height: "30px", width: "61px" },
        count: { height: "30px", fontSize: "20px" },
      };
  return (
    <Wrapper style={style.wrapper}>
      <FavoriteIcon
        width={style.iconSize}
        height={style.iconSize}
        fill={props.liked}
      ></FavoriteIcon>
      <Count style={style.count}>{props.like}</Count>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Count = styled.div`
  margin-bottom: 2px;
  display: flex;
  align-items: flex-end;
`;

export default LikeViewer;
