import Header from 'components/main/Header';
import ReviewPageRating from 'components/review/ReviewRating';
import ReviewPageReviewTable from 'components/review/ReviewTable';
import React from 'react';

function ReviewPage() {
  return (
    <>
      <Header />
      <ReviewPageRating />
      <ReviewPageReviewTable />
    </>
  );
}

export default ReviewPage;
