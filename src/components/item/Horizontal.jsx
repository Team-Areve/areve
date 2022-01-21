import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./CategoryViewer";
import PriceViewer from "./PriceViewer";
import RatingViewer from "./RatingViewer.jsx";
import ReviewViewer from "./ReviewViewer.jsx";
import LikeViewer from "./LikeViewer.jsx";

function Horizontal(props) {
  var cat = "스튜디오";
  var loc = "동교동";
  var title =
    "가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가40글자";
  var price = "4000원/시간";
  var rating = "4.87";
  var review = "99+";
  var like = "99+";
  var liked = props.liked ? "#db3232" : "#6667ab";
  //좋아요 되어 있는 매물이면 빨간색 아니면 메인 컬러
  //props로 가져오게 해놨지만 여기서 좋아요 되어 있는 건지 확인
  // 별로면 빼도 됨 스페이스 클라우드는 빠져 있음
  var height = props.small ? "30px" : "20px";
  return (
    <HorizontalContainer>
      <HorizontalImage></HorizontalImage>
      <HorizontalInfo>
        <CategoryLine>
          <CategoryViewer text={cat} height={height}></CategoryViewer>
          <CategoryViewer text={loc} height={height}></CategoryViewer>
        </CategoryLine>
        <Title>{title}</Title>
        <BottomLine>
          <PriceViewer price={price}></PriceViewer>
          <RateReviewLike>
            <RatingViewer rating={rating}></RatingViewer>
            <ReviewViewer review={review}></ReviewViewer>
            <LikeViewer like={like} liked={liked}></LikeViewer>
          </RateReviewLike>
        </BottomLine>
      </HorizontalInfo>
    </HorizontalContainer>
  );
}

const HorizontalContainer = styled.div`
  margin: 50px 0 0 50px;
  width: 950px;
  height: 333px;
  border-radius: 10px;
  display: flex;
`;

const HorizontalImage = styled.div`
  width: 592px;
  height: 333px;
  background-color: black;
`;

const HorizontalInfo = styled.div`
  width: 358px;
  height: 333px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid ${palette.MainColor};
`;

const CategoryLine = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Title = styled.div`
  margin: 20px 0 0 10px;
  height: 205px;
  font-size: 25px;
`;

const BottomLine = styled.div`
  margin: 20px 10px 0 10px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const RateReviewLike = styled.div`
  width: 198px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export default Horizontal;
