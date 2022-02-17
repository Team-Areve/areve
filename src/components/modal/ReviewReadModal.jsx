import React, { useEffect } from "react";
import { Close } from "assets/icons";
import styled from "styled-components";
import { Star } from "assets/icons";
import instance from "lib/Request";

function ReviewReadModal(props) {
	const reviewNum = props.reviewnumber;
	let review = instance({ method: "get", url: `/review/${reviewNum}` });
	let item = instance({ method: "get", url: `/item/${review.numItem}` });
	let star = [false, false, false, false, false];
	for (let i = 0; i < review.score; i++) {
		star[i] = true;
	}

	const handleClickOutside = ({ target }) => {
		if (target.className === "sc-iWVNaa heDNcy") {
			props.closeModal();
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const closeModal = () => {
		props.closeModal();
	};

	let reviewImg = [
		review.image1,
		review.image2,
		review.image3,
		review.image4,
		review.image5,
	];
	for (let i = 0; i < review.cntImg; i++) {
		let format = reviewImg[i].slice(-3);
		if (format === "png") {
			reviewImg[i] = "data:image/png;base64," + reviewImg[i].slice(0, -3);
		} else {
			reviewImg[i] = "data:image/jpeg;base64," + reviewImg[i].slice(0, -4);
		}
	}
	if (item.image1.slice(-3) === "png") {
		item.image1 = "data:image/png;base64," + item.image1.slice(0, -3);
	} else {
		item.image1 = "data:image/jpeg;base64," + item.image1.slice(0, -4);
	}

	return (
		<Layout>
			<Section>
				<CloseBtn onClick={closeModal}>
					<Close width="30px" height="30px"></Close>
				</CloseBtn>
				<ProductInfo>
					<ItemImg src={item.image1}></ItemImg>
					<div>
						<ItemTitle>{item.title}</ItemTitle>
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
					{reviewImg.map((el, idx) => {
						if (el != "") {
							return (
								<ReviewImg src={el.src} key={`ReviewImg_${idx}`}></ReviewImg>
							);
						}
					})}
				</ReviewImgWrap>
				<ReviewComment>{review.content}</ReviewComment>
			</Section>
		</Layout>
	);
}

const Layout = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	animation: modal-bg-show 0.3s;

	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Section = styled.section`
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -50px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
	width: 700px;
	height: 700px;
	margin: 0 auto;
	background-color: white;
	overflow: hidden;
	animation: modal-show 0.3s;
`;

const CloseBtn = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 650px;
`;

const ProductInfo = styled.div`
	width: 650px;
	height: 190px;
	margin: 20px 0 0 25px;
	display: flex;
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
	margin: 20px 0 0 25px;
	border-bottom: 1px solid #cbcbcb;
	display: flex;
	justify-content: space-around;
`;

const ReviewImg = styled.img`
	width: 100px;
	height: 100px;
	background-color: gray;
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

export default ReviewReadModal;
