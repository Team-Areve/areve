import React from "react";
import { Close } from "assets/icons";
import styled from "styled-components";
import { Star } from "assets/icons";

function ReviewReadModal() {
  var itemImg = undefined;
  var itemTitle = "인하대학교 60주년 기념관 201호";
  var rate = 3;
  var star = [false, false, false, false, false];
  for (let i = 0; i < rate; i++) {
    star[i] = true;
  }

  var reviewImg = [true, true, true];
  var reviewComment =
    "글쓰기 훈련으로 가장 좋은 방법이 리뷰다. 부담 없이 쓰는 일상생활은 글쓰기를 시작하기에 좋은 도구라면 리뷰는 가장 확실하고도 훌륭한 방법이다. 좋은 글에 대한 정확한 답은 없다. 문법적으로 완벽한 글이 좋은 글은 아니다. 미사여구가 뛰어난 글이 좋은 글도 아니다. 자신의 생각을 조리 있게 상대방에게 알리는 글이 제일 좋은 글이라 본다. 내 생각을 명확하게 상대방이 이해한다면 이보다 더 확실하고도 분명한 것은 없다.처음부터 무조건 자신의 생각을 적어 내라고 하면 너무 힘들다. 우리가 쓰려고 하는 글은 문학작품이 아니다. 내 생각을 처음부터 조리있게 논리정연하게 펼치는 것은 힘들다. 이에 대한 훈련을 해야 하는데 어떻게 무엇으로 해야 할 지는 막막하다. 리뷰는 가장 좋은 방법이다. 기본적으로 리뷰를 쓰기 위해서는 무엇인가 읽거나 보거나 체험을 해야 만 가능하다. 무엇인가 경험한 바를 바탕으로 글을 쓸 수 있어 덜 막막하다.내 경우에 몇 년 동안 책을 1년에 100권 이상 읽었다. 다음 단계로 리뷰를 쓰려고 마음 먹었다. 그렇게 시작한 리뷰쓰기가 어느 덧 독서 리뷰만 해도 수 백 편에 이르게 되었다. 1년에 쓴 독서리뷰가 200편 내외에 영화 리뷰가 50편 정도이고 드라마와 다큐까지 포함하면 최소한 300편 정도의 리뷰를 썼다. 내 글쓰기 실력의 9할은 리뷰다. 리뷰를 써서 내 글쓰기 실력이 늘었고 생각을 더욱 정교하게 다듬고 선 보일 수 있었다.처음에 쓴 리뷰는 보잘 것 없었다. 책을 다 읽고 열심히 내 생각을 적었다. 그 분량은 무척이나 적었다. 글 쓸 수 있는 힘이 부족하니 쓸 수 있는 리뷰 분량도 적을 수밖에 없었다. 문단으로 따지면 대략 5~6단락 정도 되지 않았나 한다. 지금은 평균 10단락 정도는 최소한 쓰고 있다. 나도 모르게 길게 쓴 리뷰는 20단락 정도까지 늘어났다. 이 정도 길이면 어지간한 책 6~7페이지는 되는 상당히 긴 분량이다. 처음부터 길게 글을 쓸 수 있는 능력이 있던 것이 결코 아니다.";

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
            <StarWrap>
              <Stars>
                {star.map((el, idx) => {
                  return (
                    <Star
                      key={idx}
                      width="45px"
                      height="45px"
                      className={el ? "yellowStar" : "none"}
                    />
                  );
                })}
              </Stars>
            </StarWrap>
          </div>
        </ProductInfo>
        <ReviewImgWrap>
          {reviewImg.map((el, idx) => {
            return <ReviewImg></ReviewImg>;
            //return el ? <ReviewImg src ={el.src}></ReviewImg>
          })}
        </ReviewImgWrap>
        <ReviewComment>{reviewComment}</ReviewComment>
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

const StarWrap = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-block;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  fill: #cbcbcb;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    fill: #fcc419;
  }
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

const ReviewComment = styled.div`
  width: 650px;
  height: 250px;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  margin: 20px 0 0 25px;
  overflow-y: scroll;
  border: 1px solid #cbcbcb;
  line-height: 150%;
`;

export default ReviewReadModal;
