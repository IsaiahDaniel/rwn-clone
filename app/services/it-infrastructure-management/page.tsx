import Image from "next/image";
import React from "react";

import Navbar from "@/app/components/Layout/Navbar";
import itInfrastructure from "../../../public/assets/it-infrastructure.png";

type Props = {};

const ItInfrastructureManagement = (props: Props) => {
	return (
		<>
			<Navbar />

			<section className="w-[80%] mx-auto py-20">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between mt-36">
					<div className="flex-1">
						<div className="flex items-start justify-start">
							<Image src={itInfrastructure} alt="About Image" className="rounded-2xl items-start" />
						</div>
					</div>

					<div className="space-y-5 flex-1">
						<h2 className="text-3xl font-bold text-purpleLight">IT Infrastructure Management</h2>
						<p className="text-purpleLight">
							A robust IT infrastructure is the backbone of any successful organization. Our experts design, implement, and manage IT infrastructures
							that are scalable, secure, and optimized for performance. From network architecture to server management, we ensure your IT environment
							is primed for success.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItInfrastructureManagement;
