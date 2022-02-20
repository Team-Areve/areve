import ModalTemplate from 'components/common/ModalTemplate';
import React from 'react';

function ReviewModal({ isModal, onToggleModal, children }) {
  return (
    <ModalTemplate
      isModal={isModal}
      onToggleModal={onToggleModal}
      width="714px"
      height="471px"
    >
      {children}
    </ModalTemplate>
  );
}

export default ReviewModal;
