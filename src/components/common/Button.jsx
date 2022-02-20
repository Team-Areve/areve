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
  font-size: 20px;
  color: black;

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
          background-color: white;
          border: 1px solid ${palette.MainColor};
        `;
      case 'tertiary':
        return css`
          text-align: start;
          padding-left: 5px;

          border: 1px solid black;
          width: 200px;
          height: 50px;
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
