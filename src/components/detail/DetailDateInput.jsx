import { FlexAlignCenter, FlexColumn, FlexRow } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

function DetailDateInput({
	pricePerHour,
	startDate,
	endDate,
	setStartDate,
	setEndDate,
	minDate,
	maxDate,
}) {
	let max = new Date(maxDate);
	let min = new Date(minDate);

	const onChangeStart = (date) => {
		setStartDate(date);
	};

	const onChangeEnd = (date) => {
		setEndDate(date);
	};
	return (
		<>
			<DetailDatePickerWrapper>
				{pricePerHour ? (
					<DetailDatePickerStyled
						selected={startDate}
						onChange={onChangeStart}
						selectsStart
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={30}
						timeCaption="time"
						dateFormat={"yyyy/MM/dd/h:mm aa"}
						startDate={startDate}
						endDate={endDate}
						minDate={min}
						maxDate={max}
					/>
				) : (
					<DetailDatePickerStyled
						selected={startDate}
						onChange={onChangeStart}
						selectsStart
						dateFormat={"yyyy/MM/dd"}
						startDate={startDate}
						endDate={endDate}
						minDate={min}
						maxDate={max}
					/>
				)}
				<span>부터</span>
			</DetailDatePickerWrapper>
			<DetailDatePickerWrapper>
				{pricePerHour ? (
					<DetailDatePickerStyled
						selected={endDate}
						onChange={onChangeEnd}
						selectsEnd
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={30}
						timeCaption="time"
						dateFormat={"yyyy/MM/dd/h:mm aa"}
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
						maxDate={max}
					/>
				) : (
					<DetailDatePickerStyled
						selected={endDate}
						onChange={onChangeEnd}
						selectsEnd
						dateFormat={"yyyy/MM/dd"}
						startDate={startDate}
						endDate={endDate}
						maxDate={max}
					/>
				)}
				<span>까지</span>
			</DetailDatePickerWrapper>
		</>
	);
}

const DetailDatePickerWrapper = styled.div`
	${FlexRow}
	span {
		${FlexAlignCenter}
		width: 50px;
	}
`;

const DetailDatePickerStyled = styled(DatePicker)`
	text-align: center;
	width: 360px;
	height: 50px;
	border-radius: 10px;
	border: 1px solid black;
	font-size: 20px;
`;
export default DetailDateInput;
