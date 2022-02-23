import ModalTemplate from "components/common/ModalTemplate";
import instance from "lib/Request";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Star } from "assets/icons";
import { Link } from "react-router-dom";

function ReviewModal({ isModal, onToggle, reviewnumber }) {
	const [review, setReview] = useState("");
	const [item, setItem] = useState("");
	const [images, setImages] = useState([]);
	const [star, setStar] = useState([]);

	useEffect(() => {
		instance({ method: "get", url: `review/${reviewnumber}` }).then((res) => {
			console.log(res);
			setReview(res.data[0]);
			setItem(res.data[1]);

			let pre = [
				res.data[1].image1,
				res.data[0].image1,
				res.data[0].image2,
				res.data[0].image3,
				res.data[0].image4,
				res.data[0].image5,
			];
			let produced = [];
			for (let img of pre) {
				if (img === "") continue;
				if (img.slice(-3) === "png") {
					produced.push("data:image/png;base64," + img.slice(0, -3));
				} else {
					produced.push("data:image/jpeg;base64," + img.slice(0, -4));
				}
			}
			setImages(produced);

			let score = [];
			for (let i = 0; i < 5; i++) {
				if (i < res.data[0].score) {
					score.push(true);
				} else {
					score.push(false);
				}
			}
			setStar(score);
		});
	}, []);

	return (
		<ModalTemplate
			isModal={isModal}
			onToggle={onToggle}
			width="700px"
			height="700px"
		>
			<div style={{ margin: "30% auto" }}>
				<ProductInfo>
					<ItemImg src={images[0]}></ItemImg>
					<div>
						<Link to={`item/${item.itemnumber}`}>
							<ItemTitle>{item.title}</ItemTitle>
						</Link>
						<StarWrap>
							<Stars>
								{star.map((el, idx) => {
									return (
										<Star
											key={`Star_${idx}`}
											width="45px"
											height="45px"
											className={el ? "yellowStar" : "none"}
										/>
									);
								})}
							</Stars>
						</StarWrap>
					</div>
				</ProductInfo>
				<ReviewImgWrap>
					{images.slice(1).map((el, idx) => {
						return <ReviewImg src={el} key={`ReviewImg_${idx}`}></ReviewImg>;
					})}
				</ReviewImgWrap>
				<ReviewComment>{review.content}</ReviewComment>
			</div>
		</ModalTemplate>
	);
}

const ProductInfo = styled.div`
	width: 650px;
	height: 190px;
	display: flex;
	position: relative;
	top: 50px;
	left: 25px;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border-bottom: 1px solid #cbcbcb;
`;

const ItemImg = styled.img`
	width: 150px;
	height: 150px;
	background-color: gray;
	display: inline-block;
	position: relative;
	left: 10px;
	object-fit: cover;
`;

const ItemTitle = styled.div`
	width: 470px;
	height: 60px;
	font-size: 25px;
	position: relative;
`;

const StarWrap = styled.div`
	display: flex;
	flex-direction: column;
	display: inline-block;
`;

const Stars = styled.div`
	display: flex;
	padding-top: 5px;
	fill: #cbcbcb;

	& svg {
		color: gray;
		cursor: pointer;
	}

	:hover svg {
		color: #fcc419;
	}

	& svg:hover ~ svg {
		color: gray;
	}

	.yellowStar {
		fill: #fcc419;
	}
`;

const ReviewImgWrap = styled.div`
	width: 650px;
	height: 120px;
	margin: 70px 0 0 25px;
	border-bottom: 1px solid #cbcbcb;
	display: flex;
	justify-content: flex-start;
`;

const ReviewImg = styled.img`
	width: 100px;
	height: 100px;
	display: inline-block;
	margin-right: 20px;
	object-fit: cover;
`;

const ReviewComment = styled.div`
	width: 650px;
	height: 250px;
	font-size: 15px;
	padding: 10px 10px 10px 10px;
	margin: 20px 0 0 25px;
	overflow-y: scroll;
	border: 1px solid #cbcbcb;
	line-height: 150%;
`;

export default ReviewModal;
