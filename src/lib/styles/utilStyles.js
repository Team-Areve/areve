import styled from 'styled-components';
import { css } from 'styled-components';

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;
export const Inner = styled.div`
  display: flex;
  margin: 30px 0;
  width: 1250px;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
`;

export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const FlexStart = css`
  display: flex;
  justify-content: flex-start;
`;

export const PageLayout = styled.div`
  margin-top: 70px;
`;
