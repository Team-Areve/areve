import Button from 'components/common/Button';
import { FlexJustifyCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function ApplyButton(props) {
  let { images, title, category, location, price, content, cautions, agreedPolicy } = props;
  const submitHandler = (e) => {
    e.preventDefault();
    if (agreedPolicy === false) {
      alert("약관에 동의해주세요");
      return;
    }

    let cntImg = images.length;
    for (let i = cntImg; i <= 8; i++) {
      images.push("")
    }
    console.log(images, title, category, location, price, content, cautions, agreedPolicy);
    //axios.post(url, {
    //images: images,
    //title: title,
    //category: category,
    //location: location,
    //price: price,
    //content: content,
    //cautions: cautions,
    //}).then((res) => console.log(res));
  };


  return (
    <ApplyButtonContainer>
      <ApplyButtonInner>
        <Button variant="primary" width="150px" height="60px" onClick={submitHandler}>
          등록하기
        </Button>
      </ApplyButtonInner>
    </ApplyButtonContainer>
  );
}

const ApplyButtonContainer = styled.section`
  ${FlexJustifyCenter}
`;

const ApplyButtonInner = styled(Inner)`
  justify-content: flex-end;
`;
export default ApplyButton;
