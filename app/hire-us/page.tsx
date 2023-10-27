import React from "react";
import Navbar from "../components/Layout/Navbar";

const HireUs = () => {
	return (
		<>
			<Navbar />
			<div className="w-[80%] mx-auto my-52 bg-slate-500">
				<div
					style={{
						backgroundImage: `url('/assets/hire-bg-img.png')`,
						backgroundSize: "cover",
						backgroundPosition: "center center",
						width: "100%",
						height: "300px",
					}}>
					<h3>Let's embark on a journey of digital transformation together.</h3>
				</div>
			</div>
		</>
	);
};

export default HireUs;
