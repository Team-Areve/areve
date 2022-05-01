import Button from 'components/common/Button';
import useOutSideClick from 'hooks/useOutSideClick';
import useToggle from 'hooks/useToggle';
import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal';

function ReviewTableColumnItem({ comment, rate, reviewnumber }) {
  const [isOpen, onToggle] = useToggle();

  return (
    <>
      <ReviewTableColumnItemContainer onClick={onToggle}>
        <Button>
          {rate > 2.5 ? (
            <>
              <ReviewTableComment>{comment}</ReviewTableComment>
              <ReviewTableRate>{rate}점</ReviewTableRate>
            </>
          ) : (
            <>
              <ReviewTableRate>{rate}점</ReviewTableRate>
              <ReviewTableComment>{comment}</ReviewTableComment>
            </>
          )}
        </Button>
      </ReviewTableColumnItemContainer>
      {0 <= reviewnumber && isOpen && (
        <ReviewModal
          isModal={isOpen}
          onToggle={onToggle}
          reviewnumber={reviewnumber}
        ></ReviewModal>
      )}
    </>
  );
}

const ReviewTableColumnItemContainer = styled.div``;

const ReviewTableComment = styled.div`
  display: inline-block;
  width: 575px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
`;
const ReviewTableRate = styled.div`
  color: ${palette.MainColor};
  width: 50px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
`;

export default ReviewTableColumnItem;
