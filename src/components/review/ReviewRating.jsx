import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import { FlexJustifyCenter } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ReviewRating() {
	const [rating, setRating] = useState(0);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
			instance({ method: "get", url: "user/token" }).then((res) => {
				setRating(res.data.rate);
			});
		}
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
