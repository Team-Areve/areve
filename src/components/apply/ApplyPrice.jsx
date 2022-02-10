import H3Box from "components/common/H3Box";
import Input from "components/common/Input";
import React, { useState } from "react";

function ApplyPrice(props) {
	const onPriceHandler = (e) => {
		props.getPrice(e.target.value);
	};
	const onPerHour = (e) => {
		props.getPricePerHour(e.target.value);
	};
	return (
		<H3Box variant="h3*" name="가격">
			<Input width={"250px"} height={"50px"} onChange={onPriceHandler} />
			<select name="" style={{ marginLeft: "10px" }} onChange={onPerHour}>
				<option value="true">원/시간</option>
				<option value="false">원/일</option>
			</select>
		</H3Box>
	);
}

export default ApplyPrice;
