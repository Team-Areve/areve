import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import { FlexJustifyCenter } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ReviewRating({ user }) {
	const [rating, setRating] = useState(0);
	useEffect(() => {
		instance({ method: "get", url: `user/${user}` }).then((res) => {
			setRating(res.data.rate);
		});
	}, []);

	return <ReviewRatingContainer>{rating}점</ReviewRatingContainer>;
}

const ReviewRatingContainer = styled.section`
	${FlexJustifyCenter}
	font-size: 30px;
	color: ${palette.MainColor};
	margin-top: 88px;
`;

export default ReviewRating;
