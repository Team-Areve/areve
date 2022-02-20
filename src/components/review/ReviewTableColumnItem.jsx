import Button from 'components/common/Button';
import useOutSideClick from 'hooks/useOutSideClick';
import useToggle from 'hooks/useToggle';
import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal';

function ReviewTableColumnItem({ comment, rate }) {
  const [isOpen, onToggle] = useToggle();
  const { targetEl } = useOutSideClick(isOpen, onToggle);

  return (
    <ReviewTableColumnItemContainer onClick={onToggle} ref={targetEl}>
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
      {isOpen && (
        <ReviewModal isModal={isOpen} onToggle={onToggle}>
          {comment} / {rate}점
        </ReviewModal>
      )}
    </ReviewTableColumnItemContainer>
  );
}

const ReviewTableColumnItemContainer = styled.div`
  margin-top: 15px;
`;

const ReviewTableComment = styled.span`
  display: inline-block;
  width: 554px;
`;
const ReviewTableRate = styled.span`
  color: ${palette.MainColor};
`;

export default ReviewTableColumnItem;
