import { palette } from 'lib/styles/palette';
import React from 'react';
import styled, { css } from 'styled-components';

function Message({ variant, children }) {
  return (
    <MessageBox>
      <Msg variant={variant}>{children}</Msg>
    </MessageBox>
  );
}

const MessageBox = styled.li`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
const Msg = styled.span`
  border-radius: 10px;
  padding: 10px;
  ${({ variant }) => {
    switch (variant) {
      case 'send':
        return css`
          border: 1px solid ${palette.MainColor};
          color: ${palette.MainColor};
        `;
      case 'receive':
        return css`
          background-color: ${palette.MainColor};
          color: white;
        `;
      default:
        break;
    }
  }};
`;

export default Message;
