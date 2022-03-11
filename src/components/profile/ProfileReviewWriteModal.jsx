import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalTemplate from "components/common/ModalTemplate";
import imageCompression from "browser-image-compression";
import StarRating from "./StarRating";
import { Camera } from "assets/icons";
import { palette } from "lib/styles/palette";

function ProfileReviewWriteModal({ open, onToggle, item }) {
	let itemImg = item.image1;
	if (itemImg.slice(-3) === "png") {
		itemImg = "data:image/png;base64," + itemImg.slice(0, -3);
	} else {
		itemImg = "data:image/jpeg;base64," + itemImg.slice(0, -4);
	}

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

		//결과 이미지 옵션
		const options = {
			maxSizeMB: 2,
			maxWidthOrHeight: 1920,
		};

		let temp = [];
		for (let i = 0; i < e.target.files.length; i++) {
			let file = e.target.files[i];
			const compressedFile = await imageCompression(file, options);
			let reader = new FileReader();
			reader.onload = () => {
				temp[i] = reader.result;

				setImgUrl([...imgUrl, ...temp]);
			};
			reader.readAsDataURL(compressedFile);
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
		<ModalTemplate
			width="700px"
			height="650px"
			isModal={open}
			onToggle={onToggle}
		>
			<ProductInfo>
				<ItemImg src={itemImg}></ItemImg>
				<div>
					<ItemTitle>{item.title}</ItemTitle>
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
		</ModalTemplate>
	);
}

const ProductInfo = styled.div`
	width: 650px;
	height: 190px;
	margin-left: 25px;
	margin-top: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border-bottom: 1px solid #cbcbcb;
`;

const ItemImg = styled.img`
	width: 150px;
	height: 150px;
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
	font-size: 15px;
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

export default ProfileReviewWriteModal;
