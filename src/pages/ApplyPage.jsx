import React, { useState } from "react";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ApplyTitle from "components/apply/ApplyTitle";
import ApplyImage from "components/apply/ApplyImage";
import ApplyCategory from "components/apply/ApplyCategory";
import ApplyLocation from "components/apply/ApplyLocation";
import ApplyPrice from "components/apply/ApplyPrice";
import ApplyDetail from "components/apply/ApplyDetail";
import ApplyCheck from "components/apply/ApplyCheck";
import Button from "components/common/Button";
import instance from "lib/Request";
import { useNavigate } from "react-router-dom";
import ApplyDateRange from "components/apply/ApplyDateRange";

function ApplyPage() {
	const [body, setBody] = useState({
		title: "",
		category: 0,
		detailLoc: "",
		sigungu: "",
		price: "",
		pricePerHour: true,
		content: "",
	});

	const [images, setImages] = useState("");
	const [location, setLocation] = useState("");
	const [postcode, setPostcode] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [policyAgreed, setPolicyAgreed] = useState(false);

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
	};
	const getPrice = (value) => {
		setBody({ ...body, price: value });
	};
	const getPricePerHour = (value) => {
		setBody({ ...body, pricePerHour: value });
	};
	const getContent = (value) => {
		setBody({ ...body, content: value });
	};
	const getAgreed = (value) => {
		setPolicyAgreed(value);
	};
	let navigate = useNavigate();

	const submitHandler = (e) => {
		console.log(body, location, images);
		e.preventDefault();
		if (policyAgreed === false) {
			alert("????????? ??????????????????");
			return;
		}
		let cntImg = images.length;

		if (cntImg === 0) {
			alert("????????? ???????????????");
			return;
		}
		if (body.title === "") {
			alert("????????? ??????????????????");
			return;
		}
		if (body.postcode === "") {
			alert("????????? ??????????????????");
			return;
		}
		if (body.price === "") {
			alert("????????? ??????????????????");
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
				startDate: startDate,
				endDate: endDate,
			},
		}).then((res) => {
			console.log(res);
			if (res.status === 500) {
				alert("????????? ??????");
			}
			let itemnumber = res.data;
			navigate("/");
			//navigate(`/item/${itemnumber}`)
		});
	};

	return (
		<PageLayout>
			<H2Box essential>????????????</H2Box>
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
			<ApplyDateRange
				setStartDate={(value) => setStartDate(value)}
				setEndDate={(value) => setEndDate(value)}
			/>
			<ApplyCheck getAgreed={getAgreed} />
			<Button
				variant="primary"
				width="150px"
				height="60px"
				onClick={submitHandler}
				style={{ marginLeft: "1100px", marginTop: "30px" }}
			>
				????????????
			</Button>
		</PageLayout>
	);
}

export default ApplyPage;
