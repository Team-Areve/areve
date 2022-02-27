import styled from 'styled-components';
import { css } from 'styled-components';
import { palette } from './palette';

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;
export const Inner = styled.div`
  display: flex;
  margin: 30px 0;
  width: 1250px;
`;

export const FlexJustifyCenter = css`
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

export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const PageLayout = styled.div`
  width: 1250px;
  margin: 70px auto;
`;

export const DetailContainer = styled.article`
  padding: 25px 0;
  border-bottom: 1px solid ${palette.grayLight};
`;
