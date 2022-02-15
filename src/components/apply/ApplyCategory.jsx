import H3Box from "components/common/H3Box";
import Select from "components/common/Select";
import React, { useState } from "react";

function ApplyCategory(props) {
	const onChange = (e) => {
		props.getCategory(e.target.value);
	};

	return (
		<H3Box variant="h3*" name="카테고리">
			<Select
				width="1080px"
				height="50px"
				fontSize="20px"
				style={{ border: "1px solid #6667ab", borderRadius: "4px" }}
				onChange={onChange}
			>
				<option value="0">선택하세요</option>
				<option value="1">주거용 공간</option>
				<option value="2">오피스/회의실</option>
				<option value="3">파티룸</option>
				<option value="4">스튜디오</option>
				<option value="5">가전기기</option>
				<option value="6">주방/생활 용품</option>
				<option value="7">디지털 기기</option>
				<option value="8">가전 렌탈 승계</option>
				<option value="9">자동차 렌탈/리스 승계</option>
				<option value="10">구합니다(주거/공적 공간)</option>
				<option value="11">구합니다(기타)</option>
				<option value="12">교환해요</option>
			</Select>
		</H3Box>
	);
}

export default ApplyCategory;
