import React, { useState, useEffect } from "react";
import { Star } from "assets/icons";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

function StarRating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  return (
    <Wrap>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <Star
              key={idx}
              width="45px"
              height="45px"
              onClick={() => handleStarClick(el)}
              className={clicked[el] ? "yellowStar" : ""}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default StarRating;

const Wrap = styled.div`
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
