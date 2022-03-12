import React from "react";
import ModalTemplate from "components/common/ModalTemplate";
import DaumPostcode from "react-daum-postcode";

function LocationSelect({
	isOpen,
	getIsOpen,
	getLocation,
	getSigungu,
	getPostcode,
}) {
	const handlePostCode = (data) => {
		let fullAddress = data.address;
		let extraAddress = "";

		if (data.addressType === "R") {
			if (data.bname !== "") {
				extraAddress += data.bname;
			}
			if (data.buildingName !== "") {
				extraAddress +=
					extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
		}

		getLocation(fullAddress);
		getSigungu(data.bname);
		getPostcode(data.zonecode);
		getIsOpen(false);
	};

	const postCodeStyle = {
		//display: "block",
		position: "relative",
		width: "600px",
		height: "600px",
		border: "1px solid #cbcbcb",
		top: "50px",
		marginTop: "30%",
		//borderTop: "0px",
		//boxSizing: "border-box",
		//marginLeft: "-1px",
	};

	return (
		<ModalTemplate
			width="600px"
			height="600px"
			isModal={isOpen}
			onToggle={() => getIsOpen(false)}
		>
			<DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
		</ModalTemplate>
	);
}

export default LocationSelect;
