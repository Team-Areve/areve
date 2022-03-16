import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TempPage() {
	useEffect(() => {
		const n = useNavigate();
		n("/");
	}, []);

	return <div>TempPage</div>;
}

export default TempPage;
