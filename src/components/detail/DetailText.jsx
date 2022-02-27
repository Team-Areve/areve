import { palette } from 'lib/styles/palette';
import { DetailContainer } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import DetailH3 from './DetailH3';

function DetailText() {
  return (
    <DetailContainer>
      <DetailH3>상세 정보</DetailH3>
      <DetailTextBody>
        소제목이랑 본문 사이 여백 20px 겨울인테리어 ~2/2 까지!❤️ 1월 유카타
        무료대여 이벤트 중! 상시대여가능한 유카타가 구비되어 있습니다 장소이미지
        마지막 사진 참고해주세요❤️🎏 🌈🐈따뜻한 모리걸 홈🐈🌈 서울 용산구
        이태원동에 있는 따뜻한 원목집 입니다. 거실에는 다다미가 깔려있으며 큰
        창은 남향이고 볕이 잘 드는 공간입니다. 23평이며, 무인대여로 쓰리룸을
        독채로 사용합니다. 스태프(모니터)룸으로 이용가능한 공간이 따로
        마련되어있어 대형촬영에 용이합니다. 다다미, 히노끼, 난로, 벽난로,
        호리존, 책방, 어항, 금붕어 등등 다양한 소품들이 구비되어 있습니다 간단한
        조리가 가능합니다. 가스사용, 조리기구 사용시 미리 말씀해주세요.
        반려동물, 유아촬영이 가능하지만 섭취시 위험할 수 있는 식물, 작은
        소품들이 많아 지속적으로 관찰해주셔야 합니다. 반려동물, 유아전부
        인원추가 해주셔야 합니다. 반려동물 입장, 유아입장시 미리 말씀해주세요!
        인테리어는 시즌에 따라 다소 변경되며 자세한 사항은 인스타그램 참고
        부탁드립니다. 꼭 필요하신 소품들은 사전에 말씀해주세요. 주차는 불가하며
        인근 2분거리에 동호(유료)주자창, 건너편에 용산구청 주차장(유료)이
        있습니다. 지속광 60w led조명 2대 제공합니다 (색온도조절가능) 다음
        소제목이랑 사이 여백 50px
      </DetailTextBody>
    </DetailContainer>
  );
}

const DetailTextBody = styled.div`
  margin-top: 20px;
`;

export default DetailText;
