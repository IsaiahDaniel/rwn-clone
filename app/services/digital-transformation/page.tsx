import Image from "next/image";
import React from "react";

import Navbar from "@/app/components/Layout/Navbar";
import digital from "../../../public/assets/digital.png";

type Props = {};

const DigitalTransformation = (props: Props) => {
	return (
		<>
			<Navbar />

			<section className="w-[80%] mx-auto py-20">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between mt-36">
					<div className="flex-1">
						<div className="flex items-start justify-start">
							<Image src={digital} alt="About Image" className="rounded-2xl items-start" />
						</div>
					</div>

					<div className="space-y-5 flex-1">
						<h2 className="text-3xl font-bold text-purpleLight">Digital Transformation Services</h2>
						<p className="text-purpleLight">
							Stay ahead of the curve with our digital transformation services. We guide organizations through technological shifts, helping them
							adopt new technologies, optimize processes, and unlock new opportunities for growth.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalTransformation;
