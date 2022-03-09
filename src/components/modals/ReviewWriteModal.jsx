import React, { useState } from "react";
import { Close, Camera } from "assets/icons";
import styled from "styled-components";
import StarRating from "./StarRating";
import { palette } from "lib/styles/palette";
import imageCompression from "browser-image-compression";

function ReviewWriteModal(props) {
	const { open, close, header } = props;
	var itemImg = undefined;
	var itemTitle = "인하대학교 60주년 기념관 201호";

	const [imgUrl, setImgUrl] = useState("");
	const [score, setScore] = useState(0);
	const [comment, setComment] = useState("");

	const getScore = (value) => {
		setScore(value);
	};

	const commentHandler = (e) => {
		setComment(e.target.value);
	};

	const handleFileOnChange = async (e) => {
		if (imgUrl.length === 5) {
			alert("사진은 5개까지 등록할 수 있어요.");
			return;
		}
		e.preventDefault();
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
				setImgUrl([...imgUrl, result]);
				console.log(imgUrl);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleFileRemove = (idx) => {
		setImgUrl(imgUrl.filter((v, i) => i != idx));
	};

	const submitReivew = () => {
		let body = {
			Review_score: score,
			Review_images: imgUrl,
			Review_content: comment,
		};
		console.log(body);

		//axios.post("", body).then((res) => console.log(res));
	};

	const render = () => {
		const res = [];
		for (let i = 0; i < imgUrl.length; i++) {
			res.push(
				<ReviewImg
					key={i}
					src={imgUrl[i]}
					onClick={() => handleFileRemove(i)}
				></ReviewImg>
			);
		}
		return res;
	};

	return (
		<Layout className={open ? "" : "closeModal"}>
			{/* 밖에부분 클릭하면 모달 창 사라지게 */}
			<Section>
				<CloseBtn>
					<Close width="30px" height="30px"></Close>
				</CloseBtn>
				<ProductInfo>
					<ItemImg></ItemImg>
					<div>
						<ItemTitle>{itemTitle}</ItemTitle>
						<StarRating getScore={getScore} />
					</div>
				</ProductInfo>
				<ReviewImgWrap>
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
					{render()}
				</ReviewImgWrap>
				<ReviewComment
					type="text"
					placeholder="대상에 대한 고객님의 느낀점을 솔직하게 작성해주세요."
					onChange={commentHandler}
				></ReviewComment>
				<Submit onClick={submitReivew}>등록하기</Submit>
			</Section>
		</Layout>
	);
}

const Layout = styled.div`
	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	display: flex;
	align-items: center;
	animation: modal-bg-show 0.3s;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.3);

	.closeModal {
		display: none;
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

const ItemImg = styled.div`
	width: 150px;
	height: 150px;
	background-color: gray;
	display: inline-block;
	position: relative;
	left: 10px;
`;

const ItemTitle = styled.div`
	width: 470px;
	height: 60px;
	font-size: 25px;
	position: relative;
`;

const ReviewImgWrap = styled.div`
	width: 650px;
	height: 120px;
	margin: 20px 0 0 25px;
	border-bottom: 1px solid #cbcbcb;
	display: flex;
	justify-content: flex-start;
`;

const ImgUpload = styled.label`
	width: 100px;
	height: 100px;
	background-color: #cbcbcb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #666666;
`;

const ReviewImg = styled.img`
	width: 100px;
	height: 100px;
	display: inline-block;
	margin-left: 20px;
	object-fit: cover;

	:hover {
		transform: scale(2);
	}
`;

const ReviewComment = styled.textarea`
	width: 650px;
	height: 200px;
	font-size: 15px;
	padding: 10px 10px 10px 10px;
	margin: 20px 0 0 25px;
	overflow-y: scroll;
	border: 1px solid #cbcbcb;
	vertical-align: top;
	border-radius: 10px;
	resize: none;

	:focus {
		outline: 1px solid #6667ab;
	}
`;

const Submit = styled.button`
	width: 150px;
	height: 50px;
	font-size: 20px;
	background-color: ${palette.MainColor};
	color: white;
	border-radius: 10px;
	margin: 10px 0 0 525px;
	line-height: 50px;
	vertical-align: middle;
	text-align: center;
`;

export default ReviewWriteModal;
