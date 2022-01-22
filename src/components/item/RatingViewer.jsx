import React from "react";
import styled from "styled-components";
import { Star } from "../../assets/icons";

function RatingViewer(props) {
  const style = props.isSmall
    ? {
        iconSize: "15px",
        wrapper: { height: "15px", width: "40px" },
        rate: { height: "20px", fontSize: "13px" },
      }
    : {
        iconSize: "20px",
        wrapper: { height: "30px", width: "61px" },
        rate: { height: "30px", fontSize: "20px" },
      };
  return (
    <Wrapper style={style.wrapper}>
      <Star
        width={style.iconSize}
        height={style.iconSize}
        fill="#FFB800"
      ></Star>
      <Rate style={style.rate}>{props.rating}</Rate>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Rate = styled.div`
  margin-bottom: 1px;
  display: flex;
  align-items: flex-end;
`;

export default RatingViewer;
