import H3Box from 'components/common/H3Box';
import Select from 'components/common/Select';
import React, { useState } from 'react';

function ApplyCategory(props) {
  const [category, setCategory] = useState(0);
  const sendCategory = () => {
    props.getCategory(category);
  }
  const onChange = (e) => {
    setCategory(e.target.value);
    sendCategory();
  };
  return (
    <H3Box variant="h3*" name="카테고리">
      <Select width="1080px" height="50px" onChange={onChange}>
        <option value="1">주거용 공간</option>
        <option value="2">오피스/회의실</option>
        <option value="3">파티룸</option>
        <option value="4">스튜디오</option>
        <option value="5">가전기기</option>
        <option value="6">주방/생활 용품</option>
        <option value="7">디지털기기</option>
        <option value="8">가전 렌탈 승계</option>
        <option value="9">자동차 렌탈/리스 승계</option>
        <option value="10">구합니다(공간)</option>
        <option value="11">구합니다(기타)</option>
        <option value="12">교환해요</option>
      </Select>
    </H3Box>
  );
}

export default ApplyCategory;
