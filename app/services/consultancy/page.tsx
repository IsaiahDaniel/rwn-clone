import Image from "next/image";
import React from "react";

import Navbar from "@/app/components/Layout/Navbar";
import consultancy from "../../../public/assets/consultancy.png";

type Props = {};

const Consultancy = (props: Props) => {
	return (
		<>
			<Navbar />

			<section className="w-[80%] mx-auto py-20">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between mt-36">
					<div className="flex-1">
						<div className="flex items-start justify-start">
							<Image src={consultancy} alt="About Image" className="rounded-2xl items-start" />
						</div>
					</div>

					<div className="space-y-5 flex-1">
						<h2 className="text-3xl font-bold text-purpleLight">Consultancy</h2>
						<p className="text-purpleLight">
							Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we
							provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with clients, offering strategic
							insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Consultancy;
