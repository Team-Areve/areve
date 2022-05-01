import H3Box from "components/common/H3Box";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

function ApplyDateRange({ setStartDate, setEndDate }) {
	const [startDate, setSDate] = useState(new Date());
	const [endDate, setEDate] = useState(null);
	const onChange = (dates) => {
		const [start, end] = dates;
		setSDate(start);
		setEDate(end);
		setStartDate(
			`${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`
		);
		setEndDate(`${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`);
	};
	return (
		<H3Box variant="h3*" name="일시">
			<DatePicker
				selected={startDate}
				onChange={onChange}
				startDate={startDate}
				endDate={endDate}
				selectsRange
				inline
			/>
		</H3Box>
	);
}

export default ApplyDateRange;
