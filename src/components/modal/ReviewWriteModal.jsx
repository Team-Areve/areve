import React from "react";
import { Close } from "assets/icons";
import styled from "styled-components";
import StarRating from "./StarRating";
import { palette } from "lib/styles/palette";

function ReviewWriteModal() {
  var itemImg = undefined;
  var itemTitle = "인하대학교 60주년 기념관 201호";

  var reviewImg = [true, true];
  return (
    <Layout>
      {/* 밖에부분 클릭하면 모달 창 사라지게 */}
      <Section>
        <CloseBtn>
          <Close width="30px" height="30px"></Close>
        </CloseBtn>
        <ProductInfo>
          <ItemImg></ItemImg>
          <div>
            <ItemTitle>{itemTitle}</ItemTitle>
            <StarRating />
          </div>
        </ProductInfo>
        <ReviewImgWrap>
          {reviewImg.map((el, idx) => {
            return <ReviewImg></ReviewImg>;
            //return el ? <ReviewImg src ={el.src}></ReviewImg>
          })}
        </ReviewImgWrap>
        <ReviewComment
          type="text"
          placeholder="대상에 대한 고객님의 느낀점을 솔직하게 작성해주세요."
        ></ReviewComment>
        <Submit>등록하기</Submit>
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: flex;
  align-items: center;
  animation: modal-bg-show 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Section = styled.section`
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  width: 700px;
  height: 700px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
  animation: modal-show 0.3s;
`;

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 650px;
`;

const ProductInfo = styled.div`
  width: 650px;
  height: 190px;
  margin: 20px 0 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;
`;

const ItemImg = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  display: inline-block;
  position: relative;
  left: 10px;
`;

const ItemTitle = styled.div`
  width: 470px;
  height: 60px;
  font-size: 25px;
  position: relative;
`;

const ReviewImgWrap = styled.div`
  width: 650px;
  height: 120px;
  margin: 20px 0 0 25px;
  border-bottom: 1px solid #cbcbcb;
`;

const ReviewImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin-right: 20px;
`;

const ReviewComment = styled.input`
  width: 650px;
  height: 200px;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  margin: 20px 0 0 25px;
  overflow-y: scroll;
  border: 1px solid #cbcbcb;
  vertical-align: top;
  border-radius: 10px;

  :focus {
    outline: 1px solid #6667ab;
  }
`;

const Submit = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  background-color: ${palette.MainColor};
  color: white;
  border-radius: 10px;
  margin: 10px 0 0 525px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
`;

export default ReviewWriteModal;
