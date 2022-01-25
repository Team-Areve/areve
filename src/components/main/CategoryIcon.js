import React from "react";
import styled from "styled-components";

function CategoryIcon(props) {
  Text = props.text;
  return (
    <CategoryIconWrapper>
      <CategoryIconImage></CategoryIconImage>
      <CategoryIconText>{props.text}</CategoryIconText>
    </CategoryIconWrapper>
  );
}

const CategoryIconWrapper = styled.div`
  display: inline-block;
  width: 120px;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid;
  margin-left: ${(props) => {
    if (Text === "주거" || Text === "펜션") {
      return "0px";
    } else if (Text === "가전") {
      return "55px";
    } else {
      return "70px";
    }
  }};
`;

const CategoryIconImage = styled.div`
  width: 120px;
  height: 120px;
`;

const CategoryIconText = styled.div`
  width: 120px;
  height: 20px;
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
`;

export default CategoryIcon;
