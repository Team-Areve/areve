import { palette } from 'lib/styles/palette';
import { FlexAlignCenter } from 'lib/styles/utilStyles';
import styled from 'styled-components';

function LocationSearchSuggestion({ addressList }) {
  console.log(addressList);
  return (
    <LocationSearchSuggestionContainer>
      <LocationSearchSuggestionInner>
        {addressList.map(({ jibunAddr }, idx) => (
          <li key={`addressList${idx}`}>{jibunAddr}</li>
        ))}
      </LocationSearchSuggestionInner>
    </LocationSearchSuggestionContainer>
  );
}

const LocationSearchSuggestionContainer = styled.div`
  font-size: 16px;
  position: absolute;
  top: 291px;
  line-height: 24px;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  border: 1px solid ${palette.grayLight};
  background-color: white;
  width: 400px;
  height: 150px;
  ${FlexAlignCenter};
  justify-content: center;
`;

const LocationSearchSuggestionInner = styled.ol``;

export default LocationSearchSuggestion;
