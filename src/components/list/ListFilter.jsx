import Button from "components/common/Button";
import Select from "components/common/Select";
import { palette } from "lib/styles/palette";
import { FlexJustifyCenter, FlexRow } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LocationSearchBox from "./LocationSearchBox";
import PriceFilter from "./PriceFilter";
import useToggle from "hooks/useToggle";
import ListDateInput from "./ListDateInput";

function ListFilter({
	getLocation,
	getStart,
	getEnd,
	getLower,
	getUpper,
	getOrder,
	lower,
	upper,
	order,
}) {
	const [isOpen, onToggle] = useToggle();
	const [tempLower, setTempLower] = useState(lower);
	const [tempUpper, setTempUpper] = useState(upper);

	useEffect(() => {
		getLower(tempLower);
		getUpper(tempUpper);
	}, [isOpen]);

	return (
		<ListFilterContainer>
			<ListFilterInner>
				<LocationSearchBox getLocation={getLocation} />
				<ListDateInput getStart={getStart} getEnd={getEnd} />
				<div>
					<Button variant="tertiary" onClick={onToggle}>
						가격
					</Button>
					{isOpen && (
						<PriceFilter
							isOpen={isOpen}
							onToggle={onToggle}
							lower={tempLower}
							upper={tempUpper}
							getLower={(v) => setTempLower(v)}
							getUpper={(v) => setTempUpper(v)}
						/>
					)}
				</div>
				<ListSelect value={order} onChange={(e) => getOrder(e.target.value)}>
					<option value="0">인기순</option>
					<option value="1">최신순</option>
				</ListSelect>
			</ListFilterInner>
		</ListFilterContainer>
	);
}

const ListFilterContainer = styled.section`
	${FlexJustifyCenter};
	margin-top: 20px;
`;

const ListFilterInner = styled.div`
	${FlexRow};
	justify-content: space-around;
	width: 1250px;

	> * {
	}

	.react-datepicker-wrapper {
		font-size: 20px;
		width: auto;
	}
`;

const ListSelect = styled(Select)`
	width: 200px;
	height: 50px;
	font-size: 20px;
	border-radius: 10px;
	border: 1px solid ${palette.grayLight};
`;
export default ListFilter;
