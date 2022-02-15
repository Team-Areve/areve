import { useCallback, useEffect, useRef } from 'react';

export default function useOutSideClick(isOpen, onClose: () => void) {
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
