import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryViewer from "./viewers/CategoryViewer";
import PriceViewer from "./viewers//PriceViewer";
import RatingViewer from "./viewers//RatingViewer.jsx";
import ReviewViewer from "./viewers//ReviewViewer.jsx";
import LikeViewer from "./viewers//LikeViewer.jsx";

function Vertical(props) {
  var cat = "스튜디오";
  var loc = "동교동";
  var title = "20글자20글자20글자20글자20글자";
  var price = "4000원/시간";
  var rating = "4.87";
  var review = "99+";
  var like = "99+";
  var liked = props.isLiked ? "#db3232" : "#6667ab";
  //좋아요 되어 있는 매물이면 빨간색 아니면 메인 컬러
  //props로 가져오게 해놨지만 여기서 좋아요 되어 있는 건지 확인
  // 별로면 빼도 됨 스페이스 클라우드는 빠져 있음
  var isSmall = false;
  return (
    <VerticalContainer>
      <VerticalImage></VerticalImage>
      <VerticalInfo>
        <CategoryLine>
          <CategoryViewer text={cat} isSmall={true}></CategoryViewer>
          <CategoryViewer text={loc} isSmall={true}></CategoryViewer>
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
      </VerticalInfo>
    </VerticalContainer>
  );
}

const VerticalContainer = styled.div`
  width: 384px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

const VerticalImage = styled.div`
  width: 384px;
  height: 216px;
  background-color: black;
`;

const VerticalInfo = styled.div`
  width: 384px;
  height: 140px;
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid ${palette.MainColor};
`;

const CategoryLine = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Title = styled.div`
  margin: 10px 0 0 10px;
  width: 384px;
  height: 44px;
  font-size: 20px;
`;

const BottomLine = styled.div`
  margin: 10px 10px 0 10px;
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

export default Vertical;
