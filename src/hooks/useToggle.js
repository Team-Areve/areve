import { useState } from 'react';

export default function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, onToggle];
}
