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
import axios from "axios";

function ApplyPage() {
	const [body, setBody] = useState({
		title: "",
		category: 0,
		postcode: "",
		detailLoc: "",
		sigungu: "",
		price: "",
		pricePerHour: true,
		content: "",
		agreedPolicy: true,
	});

	const [images, setImages] = useState("");
	const [location, setLocation] = useState("");

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
		setBody({ ...body, postcode: value });
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

	const submitHandler = (e) => {
		e.preventDefault();
		if (body.agreedPolicy === false) {
			alert("약관에 동의해주세요");
			return;
		}
		let cntImg = images.length;
		let content = body.content.replace(/(\n|\r\n)/g, "<br />");
		axios
			.post("localhost:8000/apply/", {
				images: images,
				cntImg: cntImg,
				title: body.title,
				category: body.category,
				postcode: body.postcode,
				location: location,
				detailLoc: body.detailLoc,
				sigungu: body.sigungu,
				price: body.price,
				pricePerHour: body.pricePerHour,
				content: content,
			})
			.then((res) => console.log(res));
	};

	return (
		<>
			<Header />
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

//flex-wrap 4

export default ApplyPage;
