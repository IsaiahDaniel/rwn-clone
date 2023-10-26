import React from "react";
import Header from "../components/Layout/Header";
import Corevalues from "../components/shared/Corevalues";
import Image from "next/image";

import AboutImg from "../../assets/about-img.png";
import Navbar from "../components/Layout/Navbar";

import HexagonRight from "../../assets/right-pills.svg";
import HexagonLeft from "../../assets/left-pills.svg";

import Principle1 from "../../public/assets/svgs/centric.svg";
import Principle2 from "../../public/assets/svgs/commuity-2.svg";
import Principle3 from "../../public/assets/svgs/community.svg";
import Principle4 from "../../public/assets/svgs/hand.svg";
import Principle5 from "../../public/assets/svgs/innovation.svg";
import Principle6 from "../../public/assets/svgs/innovation.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="w-[80%] mx-auto mt-36">
        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold text-purpleLight">
              Mission and Vision
            </h2>
            <p>
              As your business grows, so does the demand for dynamic and
              efficient IT environments. Our mission at RemotewebNET is simple:
              Enable our clients to scale efficiently by providing the best
              solution tools to streamline their IT infrastructure.
            </p>

            <p>
              RemotewebNET comprises a dedicated team which focuses on our
              client’s needs to deliver effective results at each milestone.
              Using a step-by-step approach ensures that attention is given to
              each aspect of the project for a successful outcome.
            </p>

            <p>
              To maximize benefits to our clients, staff, shareholders, and the
              communities we operate in. Remotewebnet Dynamics aligns itself
              with the guiding principles of visibility, velocity, and value. We
              provide the best goods and services in our field. We value
              fidelity, cooperation, and honesty.
            </p>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex items-end justify-end">
              <Image
                src={AboutImg}
                alt="AboutImg Image"
                className="rounded-2xl items-end"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#090E2F] h-full">
        <div className="absolute left-0 top-40">
          <Image
            src={HexagonRight}
            width={450}
            height={600}
            alt="Right Hexagon"
          />
        </div>
        <div className="absolute right-0 top-40">
          <Image
            src={HexagonLeft}
            width={450}
            height={600}
            alt="Right Hexagon"
          />
        </div>

        <section className="w-[80%] mx-auto text-white">
          <div className="text-center py-10 w-[80%] mx-auto">
            <p className="text-left py-5">Our core values</p>
            <h2 className="text-[52px]">Key Principles and standards that guides the work process at RWNDynamics</h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 text-white"
            // style={{
            //   backgroundImage: `url(${ImageBg}) center center/cover`,
            //   height: "100%",
            // }}
          >
            <div>
              <Image src={Principle1} alt="" />
              <h2 className="text-2xl font-bold py-2">Consultancy</h2>
              <p>
                Our consultancy services are the cornerstone of our offerings.
                With a deep understanding of industry trends and best practices,
                we provide tailored guidance to help businesses make informed
                decisions. Our experts collaborate closely with clients,
                offering strategic insights, technology roadmaps, and
                optimization strategies to align IT initiatives with
                organizational goals.
              </p>
            </div>

            <div>
              <Image src={Principle2} alt="" />
              <h2 className="text-2xl font-bold py-2">Home Automation</h2>
              <p>
                Experience the future with our home automation solutions. We
                transform living spaces into smart environments, seamlessly
                integrating devices and systems for enhanced comfort, energy
                efficiency, and security. From smart lighting and thermostats to
                home security and entertainment systems, we create a connected
                home tailored to your preferences
              </p>
            </div>

            <div>
              <Image src={Principle3} alt="" />
              <h2 className="text-2xl font-bold py-2">
                Cybersecurity Services
              </h2>
              <p>
                Protect your digital assets from evolving threats with our
                cybersecurity services. We conduct comprehensive risk
                assessments, implement robust security measures, and provide
                ongoing monitoring to safeguard your systems, data, and
                sensitive information.
              </p>
            </div>

            <div>
              <Image src={Principle4} alt="" />
              <h2 className="text-2xl font-bold py-2">
                Supply and Installation of ICT Hardware and Software
              </h2>
              <p>
                We offer a wide range of hardware equipment and software based
                on the platform agreed with clients. Our supllies are of the
                best quality and we have experts who are always ready to install
                and maintain this supplies. Based on agreements and contracts we
                stand by our words.
              </p>
            </div>

            <div>
              <Image src={Principle5} alt="" />
              <h2 className="text-2xl font-bold py-2">
                Digital Transformation Services:
              </h2>
              <p>
                Stay ahead of the curve with our digital transformation
                services. We guide organizations through technological shifts,
                helping them adopt new technologies, optimize processes, and
                unlock new opportunities for growth.
              </p>
            </div>

            <div>
              <Image src={Principle6} alt="" />
              <h2 className="text-2xl font-bold py-2">
                IT Infrastructure Management
              </h2>
              <p>
                A robust IT infrastructure is the backbone of any successful
                organization. Our experts design, implement, and manage IT
                infrastructures that are scalable, secure, and optimized for
                performance. From network architecture to server management, we
                ensure your IT environment is primed for success.
              </p>
            </div>
          </div>
        </section>


        <section className="bg-[#F4F6FF] px-10 py-28">
          <div className="w-[80%] mx-auto">
            <span className="text-[#EB267A] text-4xl text-center">Our Team</span>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 space-y-4 py-10">
              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

              <div>
                <Image src='/assets/4c022ab30f.png' alt="" width={200} height={200} />
                <h2>Micheal Ebohen</h2>
                <p>MD/CEO</p>
              </div>

            </div>
          </div>

        </section>
      </section>
    </>
  );
};

export default About;
