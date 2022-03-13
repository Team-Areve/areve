import Input from 'components/common/Input';
import useOutSideClick from 'hooks/useOutSideClick';
import { palette } from 'lib/styles/palette';
import { FlexAlignCenter, FlexRow } from 'lib/styles/utilStyles';
import styled from 'styled-components';

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

function PriceFilter({ isOpen, onToggle }) {
  const { targetEl } = useOutSideClick(isOpen, onToggle);

  return (
    <PriceFilterContainer ref={targetEl}>
      <PriceFilterInner>
        <PriceInputForm>
          <Input width="150px"></Input>~<Input width="150px"></Input>
        </PriceInputForm>
        <PriceCheckForm>
          {PriceFilterList.map(({ text, value }) => (
            <label key={text}>
              <Input type="checkbox" value={value} /> {text}
            </label>
          ))}
        </PriceCheckForm>
      </PriceFilterInner>
    </PriceFilterContainer>
  );
}

const PriceFilterContainer = styled.div`
  position: absolute;
  top: 300px;
  font-size: 16px;
  line-height: 24px;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  border: 1px solid ${palette.grayLight};
  background-color: white;
  width: 350px;
  height: 250px;
  border-radius: 10px;
  ${FlexAlignCenter};
  justify-content: center;
  z-index: 100;
`;

const PriceFilterInner = styled.div``;

const PriceInputForm = styled.form`
  ${FlexRow}
`;

const PriceCheckForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-top: 10px;

  Input {
    margin-top: 10px;
    width: 15px;
    height: 15px;
  }
`;
export default PriceFilter;
