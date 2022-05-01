import ReviewPageRating from "components/review/ReviewRating";
import ReviewPageTable from "components/review/ReviewTable";
import React from "react";
import { useParams } from "react-router-dom";

function ReviewPage() {
	const { userNum } = useParams();
	console.log(userNum);

	return (
		<>
			<ReviewPageRating user={userNum} />
			<ReviewPageTable user={userNum} />
		</>
	);
}

export default ReviewPage;
