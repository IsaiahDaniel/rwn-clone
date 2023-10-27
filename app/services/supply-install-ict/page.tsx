import Image from "next/image";
import React from "react";

import Navbar from "@/app/components/Layout/Navbar";
import consultancy from "../../../public/assets/consultancy.png";

type Props = {};

const SupplyInstallIct = (props: Props) => {
	return (
		<>
			<Navbar />

			<section className="w-[90%] mx-auto py-20">
				<div className=" w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-36">
					<div className="flex-1">
						<div className="flex items-start justify-start">
							<Image src={consultancy} alt="About Image" className="rounded-2xl items-start" />
						</div>
					</div>

					<div className="space-y-5 flex-1">
						<h2 className="text-3xl font-bold text-purpleLight">Supply and Install ICT Hardware</h2>
						<p className="text-purpleLight">We offer a wide range of hardware equipment and software based on the platform agreed with clients.</p>
					</div>
				</div>
				<div className="bg-[#FAFCFF] my-28">
					{/* First section */}
					<div className="px-16 py-16">
						<h2 className="text-3xl font-bold text-purpleLight pb-5">ICT Hardware we supply and install are:</h2>
						<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
							{/* First column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Computers and Laptops:</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Desktop computers</li>
												<li>Laptops and notebooks</li>
												<li>Workstations</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Audiovisual Equipment</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Projectors</li>
												<li>Video conferencing systems</li>
												<li>Audio systems</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Second column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Networking Equipment</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Routers and switches</li>
												<li>Wireless access points</li>
												<li>Network cables & accessories</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Peripherals</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Printers and scanners</li>
												<li>Monitors and displays</li>
												<li>Keyboards, mouse, and other input devices</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Third column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Servers</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Tower servers</li>
												<li>Rack-mounted servers</li>
												<li>Blade servers</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Security Equipment</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Surveillance cameras and systems</li>
												<li>Access control systems</li>
												<li>Firewalls and security appliances</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Fourth column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Storage Solutions</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Hard drives and solid-state drives (SSDs)</li>
												<li>Network Attached Storage (NAS)</li>
												<li>Storage Area Network (SAN) solutions</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Power and Backup</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Uninterruptible Power Supplies (UPS)</li>
												<li>Power distribution units</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Fifth column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Mobile Devices</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Smartphones and tablets</li>
												<li>Mobile device management solutions</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Home Automation Devices</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Smart Lighting</li>
												<li>Smart Thermostats</li>
												<li>Smart Locks</li>
												<li>Smart Security Cameras and Doorbells</li>
												<li>Smart Plugs and Outlets</li>
												<li>Smart Blinds and Shades</li>
												<li>Smart Sensors</li>
												<li>Smart Appliances</li>
												<li>Smart Entertainment</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* second section */}

					<div className="px-16 py-16">
						<h2 className="text-3xl font-bold text-purpleLight pb-5">ICT Software we supply and install are:</h2>
						<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
							{/* First column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Operating Systems</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Microsoft Windows</li>
												<li>macOS</li>
												<li>Linux distributions</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Backup and Recovery</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Backup software</li>
												<li>Backup software and solutions</li>
												<li>Disaster recovery planning tools</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Second column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Productivity Suites</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Microsoft Office suite</li>
												<li>G Suite (now Google Workspace)</li>
												<li>LibreOffice</li>
											</ul>
										</div>
									</div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Security Software</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Antivirus and antimalware solutions</li>
												<li>Firewall software</li>
												<li>Encryption tools</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Third column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Networking and Server Software</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Network management tools</li>
												<li>Server operating systems (e.g., Windows Server, Linux distributions)</li>
												<li>Virtualization software (e.g., VMware, Hyper-V)</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Fourth column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Collaboration and Communication</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Email and messaging solutions</li>
												<li>Video conferencing tools</li>
												<li>Team collaboration platforms</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Fifth column */}
							<div className="">
								<div>
									<div>
										<h4 className="text-2xl font-bold text-purpleLight py-5">Development and Programming Tools</h4>
										<div className="border-solid border-l-2 border-[#EB267A] pl-10">
											<ul className="text-[#737BB3]" style={{ listStyleType: "unset" }}>
												<li>Integrated Development Environments (IDEs)</li>
												<li>Version control systems</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SupplyInstallIct;
