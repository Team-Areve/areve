import { palette } from 'lib/styles/palette';
import { FlexColumn } from 'lib/styles/utilStyles';
import styled, { css } from 'styled-components';

function PriceFilter({ isActive }) {
  const PriceFilterList = [
    {
      text: '전체',
      value: 'entire',
    },
    {
      text: '~100,000원 미만',
      value: 'one',
    },
    {
      text: '100,000원 ~ 200,000원',
      value: 'two',
    },
    {
      text: '200,000원 ~ 300,000원',
      value: 'three',
    },
    {
      text: '300,000원 이상',
      value: 'four',
    },
  ];

  return (
    <PriceFilterContainer isActive={isActive}>
      {PriceFilterList.map(({ text, value }) => (
        <label key={text}>
          <input type="checkbox" value={value} /> {text}
        </label>
      ))}
    </PriceFilterContainer>
  );
}

const PriceFilterContainer = styled.div`
  ${FlexColumn}
  font-size: 16px;
  position: absolute;
  bottom: 168px;
  line-height: 24px;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  border: 1px solid ${palette.grayLight};
  background-color: white;
  width: 200px;

  ${({ isActive }) =>
    isActive
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

export default PriceFilter;
