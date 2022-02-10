import H3Box from "components/common/H3Box";
import Input from "components/common/Input";
import TextLength from "components/common/TextLength";
import React, { useState } from "react";

function ApplyTitle(props) {
	const [title, setTitle] = useState("");
	const onChange = (e) => {
		setTitle(e.target.value);
		props.getTitle(e.target.value);
	};

	return (
		<H3Box variant="h3*" name="제목">
			<Input
				width="1020px"
				height=" 50px"
				name="title"
				value={title}
				onChange={onChange}
				isFocus
			/>
			<TextLength currentLen={title.length} maxLen="40"></TextLength>
		</H3Box>
	);
}

export default ApplyTitle;
