import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers/CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";

function HorizontalSmall(props) {
  var cat = "스튜디오";
  var loc = "동교동";
  var title = "20글자20글자20글자20글자20글자";
  var price = "4000원/시간";
  var rating = "4.87";
  var review = "99+";
  var like = "99+";
  var liked = props.liked ? "#db3232" : "#6667ab";
  var isSmall = true;
  return (
    <HorizontalContainer>
      <a>
        <HorizontalImage></HorizontalImage>
        <HorizontalInfo>
          <CategoryLine>
            <CategoryViewer text={cat} isSmall={isSmall}></CategoryViewer>
            <CategoryViewer text={loc} isSmall={isSmall}></CategoryViewer>
          </CategoryLine>
          <Title>{title}</Title>
          <BottomLine>
            <PriceViewer isSmall={isSmall} price={price}></PriceViewer>
            <RateReviewLike>
              <RatingViewer isSmall={isSmall} rating={rating}></RatingViewer>
              <ReviewViewer isSmall={isSmall} review={review}></ReviewViewer>
              <LikeViewer
                isSmall={isSmall}
                like={like}
                liked={liked}
              ></LikeViewer>
            </RateReviewLike>
          </BottomLine>
        </HorizontalInfo>
      </a>
    </HorizontalContainer>
  );
}

const HorizontalContainer = styled.div`
  width: 500px;
  height: 180px;
  display: flex;
`;

const HorizontalImage = styled.div`
  width: 320px;
  height: 180px;
  background-color: black;
`;

const HorizontalInfo = styled.div`
  width: 180px;
  height: 180px;
  display: inline-block;
  border-radius: 0px 10px 10px 0px;
  box-sizing: border-box;
  border: 1px solid ${palette.MainColor};
`;

const CategoryLine = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Title = styled.div`
  margin: 10px 0 0 10px;
  width: 160px;
  height: 75px;
  font-size: 17px;
`;

const BottomLine = styled.div`
  margin: 0 10px 0 10px;
  height: 55px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const RateReviewLike = styled.div`
  width: 50px;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export default HorizontalSmall;
