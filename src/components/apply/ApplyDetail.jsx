import H3Box from "components/common/H3Box";
import TextLength from "components/common/TextLength";
import { FlexColumn } from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";

function ApplyDetail(props) {
	const [detail, setDetail] = useState("");
	const onChange = (e) => {
		setDetail(e.target.value);
		props.getContent(e.target.value);
	};
	return (
		<H3Box variant="h3*" name="상세설명" star={false}>
			<ApplyDetailBinder>
				<TextArea name="detail" value={detail} onChange={onChange} />
				<TextLengthBox>
					<TextLength currentLen={detail.length} maxLen="500"></TextLength>
				</TextLengthBox>
			</ApplyDetailBinder>
		</H3Box>
	);
}

const ApplyDetailBinder = styled.div`
	${FlexColumn}
`;

const TextLengthBox = styled.div`
	position: relative;
	left: 1016px;
`;

const TextArea = styled.textarea`
	width: 1080px;
	height: 230px;
	border: 1px solid #6667ab;
	padding: 5.5px 12px 5.5px 10px;
	border-radius: 4px;
	outline: none;
	font-size: 20px;
	resize: none;
`;

export default ApplyDetail;
