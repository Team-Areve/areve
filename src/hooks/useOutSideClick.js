import { useCallback, useEffect, useRef } from 'react';

/** ref이외의 공간을 클릭할시 onClose함수를 실행시키는 함수 */
export default function useOutSideClick(isOpen, onClose) {
  const targetEl = useRef(null);

  const onClickOutSide = useCallback(
    (e) => {
      const { target } = e;
      if (target instanceof Node) {
        if (isOpen && !targetEl.current?.contains(target)) {
          onClose();
        }
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener('click', onClickOutSide);
    return () => {
      window.removeEventListener('click', onClickOutSide);
    };
  }, [onClickOutSide]);

  return {
    targetEl,
  };
}
