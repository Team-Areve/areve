import React, { useEffect, useState } from "react";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ProfileInfo from "components/profile/ProfileInfo";
import instance from "lib/Request";

function ProfilePage() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	useEffect(() => {
		instance({ method: "get", url: "user/token" }).then((res) => {
			setUser(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<PageLayout>
			<H2Box>내 정보</H2Box>
			<ProfileInfo
				user={user}
				setPassword={(e) => setPassword(e)}
				setPasswordConfirm={(e) => setPasswordConfirm(e)}
			/>
		</PageLayout>
	);
}

export default ProfilePage;
