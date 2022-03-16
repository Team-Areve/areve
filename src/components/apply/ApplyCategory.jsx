import H3Box from "components/common/H3Box";
import Select from "components/common/Select";
import React from "react";

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
				<option value="1">공간</option>
				<option value="2">도서</option>
				<option value="3">식재료</option>
			</Select>
		</H3Box>
	);
}

export default ApplyCategory;
