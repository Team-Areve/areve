import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import { DetailContainer, FlexJustifyCenter } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailH3 from "./DetailH3";
import DetailReviewItem from "./DetailReviewItem";

function DetailReview(props) {
	const [selected, setSelected] = useState(1);
	const [shoWReview, setShoWReview] = useState(false);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		instance({
			method: "get",
			url: `review/item/${props.item}/${selected}`,
		}).then((res) => {
			setReviews([...res.data]);
		});
	}, [selected]);

	const selectedStyle = { color: "#6667ab" };

	return (
		<DetailReviewContainer>
			<DetailH3>후기</DetailH3>
			<DetailReviewRateWrapper>
				<DetailReivewRate>후기 {props.count}개</DetailReivewRate>
				<DetailReivewRate>평점 {props.rate}점</DetailReivewRate>
			</DetailReviewRateWrapper>
			{/* <DetailReviewImg></DetailReviewImg> 나중에 해 */}
			<DetailFilter>
				<div style={{ borderBottom: `1px solid ${palette.grayLight}` }}>
					<DetailFilterCategory
						style={selected ? selectedStyle : {}}
						onClick={() => setSelected(1)}
					>
						내림차순
					</DetailFilterCategory>
					<DetailFilterCategory
						style={!selected ? selectedStyle : {}}
						onClick={() => setSelected(0)}
					>
						저점
					</DetailFilterCategory>
				</div>
				{reviews.slice(0, 3).map((el, idx) => {
					return (
						<DetailReviewItem
							key={`ReviewItem_${idx}`}
							username={el.writerName}
							content={el.content}
							score={el.score}
						></DetailReviewItem>
					);
				})}
				{shoWReview ? (
					reviews.slice(3).map((el, idx) => {
						return (
							<DetailReviewItem
								key={`ReviewItem_${idx}`}
								username={el.writerName}
								content={el.content}
								score={el.score}
							></DetailReviewItem>
						);
					})
				) : (
					<></>
				)}
				<GetMore onClick={() => setShoWReview(!shoWReview)}>
					{shoWReview ? "접기" : "펼치기"}
				</GetMore>
			</DetailFilter>
		</DetailReviewContainer>
	);
}

const DetailReviewContainer = styled(DetailContainer)`
	border: none;
`;

const DetailReviewRateWrapper = styled.div`
	${FlexJustifyCenter}
	margin-top: 20px;
	margin-bottom: 30px;
`;

const DetailReivewRate = styled.span`
	text-align: center;
	width: 300px;
	font-size: 25px;
`;

const GetMore = styled.button`
	width: 750px;
	height: 70px;
	line-height: 70px;
	vertical-align: middle;
	text-align: center;
	font-size: 20px;
	color: ${palette.MainColor};
`;

const DetailFilter = styled.div`
	font-size: 22px;
	margin-top: 20px;
`;

const DetailFilterCategory = styled.span`
	display: inline-block;
	width: 100px;
	text-align: center;
	color: ${palette.grayLight};
	margin-bottom: 10px;
`;
export default DetailReview;
