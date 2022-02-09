import React, { useState } from 'react';
import Header from 'components/main/Header';
import { PageLayout } from 'lib/styles/utilStyles';
import H2Box from 'components/common/H2Box';
import ApplyTitle from 'components/apply/ApplyTitle';
import ApplyImage from 'components/apply/ApplyImage';
import ApplyCategory from 'components/apply/ApplyCategory';
import ApplyLocation from 'components/apply/ApplyLocation';
import ApplyPrice from 'components/apply/ApplyPrice';
import ApplyDetail from 'components/apply/ApplyDetail';
import ApplyCaution from 'components/apply/ApplyCaution';
import ApplyCheck from 'components/apply/ApplyCheck';
import ApplyButton from 'components/apply/ApplyButton';

function ApplyPage() {
  const [images, setImages] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [cautions, setCautions] = useState("");
  const [agreedPolicy, setAgreedPolicy] = useState(false);

  const getImages = (value) => {
    setImages(value);
  }
  const getTitle = (value) => {
    setTitle(value);
  }
  const getCategory = (value) => {
    setCategory(value);
  }
  const getLocation = (value) => {
    setLocation(value);
  }
  const getPrice = (value) => {
    setPrice(value);
  }
  const getContent = (value) => {
    setContent(value);
  }
  const getCautions = (value) => {
    setCautions(value);
  }
  const getAgreedPolicy = (value) => {
    setAgreedPolicy(value);
  }

  return (
    <>
      <Header />
      <PageLayout>
        <H2Box essential>등록하기</H2Box>
        <ApplyImage getImages={getImages} />
        <ApplyTitle getTitle={getTitle} />
        <ApplyCategory getCategory={getCategory} />
        <ApplyLocation getLocation={getLocation} />
        <ApplyPrice getPrice={getPrice} />
        <ApplyDetail getContent={getContent} />
        <ApplyCaution getCautions={getCautions} />
        <ApplyCheck getAgreedPolicy={getAgreedPolicy} />
        <ApplyButton images={images} title={title} category={category} location={location} price={price} content={content} cautions={cautions} agreedPolicy={agreedPolicy} />
      </PageLayout>
    </>
  );
}

export default ApplyPage;
