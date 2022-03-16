import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TempPage() {
	const n = useNavigate();
	useEffect(() => {
		n("/");
	}, []);

	return <div>TempPage</div>;
}

export default TempPage;
