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

		getSigungu(data.bname);
		getPostcode(data.zonecode);
		getLocation(fullAddress);
		getIsOpen(false);
	};

	const postCodeStyle = {
		position: "relative",
		width: "600px",
		height: "600px",
		border: "1px solid #cbcbcb",
		marginTop: "30%",
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
