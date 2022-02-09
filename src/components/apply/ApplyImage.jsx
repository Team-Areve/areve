import H3Box from 'components/common/H3Box';
import React, { useState } from 'react';
import imageCompression from "browser-image-compression";
import styled from 'styled-components';
import { Camera } from 'assets/icons';

function ApplyImage(props) {
  const [images, setImages] = useState([]);
  const sendImages = () => {
    props.getImages(images);
  }

  const handleFileOnChange = async (e) => {
    e.preventDefault();
    if (images.length === 8) {
      alert("더 이상 추가 할 수 없습니다.");
      return;
    }
    let file = e.target.files[0];

    //결과 이미지 옵션
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setImages([...images, result]);
        sendImages();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileRemove = (idx) => {
    setImages(images.filter((v, i) => i != idx))
    sendImages();
  }

  const render = () => {
    const res = [];
    for (let i = 0; i < images.length; i++) {
      res.push(<PreviewImg key={i} src={images[i]} onClick={() => handleFileRemove(i)}></PreviewImg>);
    }
    return res;
  }

  return (
    <H3Box variant="h3*" name="사진">
      <ImgWrap>
        <ImgUploadWrap>
          <ImgUpload htmlFor="img-upload">
            <Camera width="50px" height="50px" fill="#666666"></Camera>
            사진등록
          </ImgUpload>
          <input
            id="img-upload"
            multiple
            type="file"
            accept="img/jpg, image/png, image/jpeg"
            onChange={handleFileOnChange}
            style={{ display: "none" }}
          ></input>
          <ImgUploadCaution>상품 이미지는 16:9 비율로 표시됩니다.</ImgUploadCaution>
        </ImgUploadWrap>
        <PreviewWrap>
          {render()}
        </PreviewWrap>
      </ImgWrap>
    </H3Box>
  );
}


const ImgWrap = styled.div`
  width: 650px;
  height: 300px;
  margin: 20px 0 0 25px;
  display: flex;
  justify-content: flex-start;
`;

const ImgUpload = styled.label`
  width: 384px;
  height: 216px;
  background-color: #cbcbcb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666666;
`;

const ImgUploadWrap = styled.div`
  width: 384px;
  height: 300px;
  display: inline-block;
`

const ImgUploadCaution = styled.div`
  width: 384px;
  height: 84px;
  font-size: 15px;
  text-align: center;
  line-height: 84px;
  vertical-align: middle;
`

const PreviewWrap = styled.div`
  width: 680px;
  min-width: 680px;
  height: 300px;
  display:flex;
  flex-wrap:wrap;
`
const PreviewImg = styled.img`
  width: 160px;
  height: 90px;
  margin-left: 10px;
  margin-bottom: 15px;
  object-fit: cover;

  :hover {
    transform: scale(2)
  }
`;

export default ApplyImage;
