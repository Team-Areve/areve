import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function Button({ width, height, borderRadius = '6px', children, ...rest }) {
  return (
    <ButtonStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${palette.MainColor};
  color: white;
  font-size: 25px;

  &:disabled {
    background-color: ${palette.grayLightest};
    color: ${palette.gray};
    line-height: 1.42;
    border: none;
    cursor: not-allowed;
  }
`;

export default Button;
