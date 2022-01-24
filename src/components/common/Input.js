import { palette } from 'lib/styles/palette';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function Input({ width, height, borderRadius = '4px', ...rest }) {
  // 왜 객체로?
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <InputStyled
      {...rest}
      borderRadius={borderRadius}
      width={width}
      height={height}
      ref={inputRef}
    />
  );
}

const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${palette.MainColor};
  padding: 5.5px 12px 5.5px 10px;
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
`;

export default Input;
