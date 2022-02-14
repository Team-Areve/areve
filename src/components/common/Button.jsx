import { palette } from 'lib/styles/palette';
import React from 'react';
import styled, { css } from 'styled-components';

function Button({
  variant,
  width,
  height,
  borderRadius = '6px',
  children,
  ...rest
}) {
  return (
    <ButtonStyled
      variant={variant}
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

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          font-size: 25px;
          background-color: ${palette.MainColor};
          color: white;
        `;

      case 'secondary':
        return css`
          font-size: 20px;
          background-color: white;
          color: black;
          border: 1px solid #6667ab;
        `;
      default:
        return css``;
    }
  }}

  &:disabled {
    background-color: ${palette.grayLightest};
    color: ${palette.gray};
    line-height: 1.42;
    border: none;
    cursor: not-allowed;
  }
`;

export default Button;
