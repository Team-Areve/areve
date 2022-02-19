import React, { useState, useEffect } from "react";
import Header from "components/main/Header";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ApplyTitle from "components/apply/ApplyTitle";
import ApplyImage from "components/apply/ApplyImage";
import ApplyCategory from "components/apply/ApplyCategory";
import ApplyLocation from "components/apply/ApplyLocation";
import ApplyPrice from "components/apply/ApplyPrice";
import ApplyDetail from "components/apply/ApplyDetail";
import ApplyCaution from "components/apply/ApplyCaution";
import ApplyCheck from "components/apply/ApplyCheck";
import Button from "components/common/Button";
import instance from "lib/Request";
import NavBar from "components/navigator/NavBar";
import { useNavigate } from "react-router-dom";

function ApplyPage() {
	const [toggled, setToggled] = useState(false);

	const getToggled = (value) => {
		setToggled(value);
	};
	const [body, setBody] = useState({
		title: "",
		category: 0,
		detailLoc: "",
		sigungu: "",
		price: "",
		pricePerHour: true,
		content: "",
		agreedPolicy: true,
	});

	const [images, setImages] = useState("");
	const [location, setLocation] = useState("");
	const [postcode, setPostcode] = useState("");

	const getImages = (value) => {
		setImages(value);
	};
	const getTitle = (value) => {
		setBody({ ...body, title: value });
	};
	const getCategory = (value) => {
		setBody({ ...body, category: value });
	};
	const getLocation = (value) => {
		//console.log("getLoc in Apply Page", value);
		setBody({ ...body, location: value });
		setLocation(value);
	};
	const getDetailLoc = (value) => {
		setBody({ ...body, detailLoc: value });
	};
	const getSigungu = (value) => {
		setBody({ ...body, sigungu: value });
	};
	const getPostcode = (value) => {
		setPostcode(value);
		//console.log("postcode", body.postcode);
	};
	const getPrice = (value) => {
		setBody({ ...body, price: value });
	};
	const getPricePerHour = (value) => {
		setBody({ ...body, pricePerHour: value });
	};
	const getContent = (value) => {
		setBody({ ...body, content: value });
		//console.log(body.content);
	};
	const getAgreedPolicy = (value) => {
		setBody({ ...body, agreedPolicy: value });
		//console.log(body.agreedPolicy);
	};
	let navigate = useNavigate();

	const submitHandler = (e) => {
		console.log(body, location, images);
		e.preventDefault();
		if (body.agreedPolicy === false) {
			alert("약관에 동의해주세요");
			return;
		}
		let cntImg = images.length;

		if (cntImg === 0) {
			alert("사진을 넣어주세요");
			return;
		}
		if (body.title === "") {
			alert("제목을 입력해주세요");
			return;
		}
		if (body.postcode === "") {
			alert("위치를 입력해주세요");
			return;
		}
		if (body.price === "") {
			alert("가격을 입력해주세요");
			return;
		}

		let content = body.content.replace(/(\n|\r\n)/g, "<br />");
		let producedImages = [];
		for (let i = 0; i < cntImg; i++) {
			let forServer = "";
			if (images[i].substring(11, 14) === "png") {
				forServer = images[i].slice(22) + "png";
			} else {
				forServer = images[i].slice(23) + "jpeg";
			}
			producedImages.push(forServer);
		}

		instance.defaults.headers.common[
			"Authorization"
		] = `Token ${localStorage.getItem("token")}`;
		instance({
			method: "post",
			url: "/apply/",
			data: {
				images: producedImages,
				cntImg: cntImg,
				title: body.title,
				category: body.category,
				postcode: postcode,
				location: location,
				detailLoc: body.detailLoc,
				sigungu: body.sigungu,
				price: body.price,
				pricePerHour: body.pricePerHour,
				content: content,
			},
		}).then((res) => {
			console.log(res);
			if (res.status === 500) {
				alert("로그인 필요");
			}
			let itemnumber = res.data;
			navigate("/");
			//navigate(`/item/${itemnumber}`)
		});
	};

	return (
		<>
			<Header getToggled={getToggled} />
			<NavBar toggled={toggled} getToggled={getToggled} />
			<PageLayout>
				<H2Box essential>등록하기</H2Box>
				<ApplyImage getImages={getImages} />
				<ApplyTitle getTitle={getTitle} />
				<ApplyCategory getCategory={getCategory} />
				<ApplyLocation
					getLocation={getLocation}
					getPostcode={getPostcode}
					getDetailLoc={getDetailLoc}
					getSigungu={getSigungu}
				/>
				<ApplyPrice getPrice={getPrice} getPricePerHour={getPricePerHour} />
				<ApplyDetail getContent={getContent} />
				{/* <ApplyCaution/> */}
				<ApplyCheck getAgreedPolicy={getAgreedPolicy} />
				<Button
					variant="primary"
					width="150px"
					height="60px"
					onClick={submitHandler}
					style={{ marginLeft: "1100px", marginTop: "30px" }}
				>
					등록하기
				</Button>
			</PageLayout>
		</>
	);
}

export default ApplyPage;
