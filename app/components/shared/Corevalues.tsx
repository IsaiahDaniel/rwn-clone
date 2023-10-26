import React from "react";

import Principle1 from "../../../public/assets/svgs/centric.svg";
import Principle2 from "../../../public/assets/svgs/commuity-2.svg";
import Principle3 from "../../../public/assets/svgs/community.svg";
import Principle4 from "../../../public/assets/svgs/hand.svg";
import Principle5 from "../../../public/assets/svgs/innovation.svg";
import Principle6 from "../../../public/assets/svgs/innovation.svg";

import Image from "next/image";
import ImageBg from "../../../assets/gradient-bg.png";
import ImageBg2 from "../../../public/assets/bg-gradient-image.png";

const Corevalues = () => {
  return (
    <section className="w-[80%] mx-auto mt-28">
      <div>
        <small>Our Core Values</small>
        <h2>
          Key Principles and standards that guides the work process at
          RWNDynamics
        </h2>
      </div>

      <img src="/assets/4c022ab30f.png" alt="testing" height={600} width={600} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 h-full" style={{ backgroundImage: `url(${ImageBg}) center center/cover`, height: "100%" }}>
        <div>
          <Image src={Principle1} alt="" />
          <h2 className="text-2xl font-bold py-2">Consultancy</h2>
          <p>
            Our consultancy services are the cornerstone of our offerings. With
            a deep understanding of industry trends and best practices, we
            provide tailored guidance to help businesses make informed
            decisions. Our experts collaborate closely with clients, offering
            strategic insights, technology roadmaps, and optimization strategies
            to align IT initiatives with organizational goals.
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
            home security and entertainment systems, we create a connected home
            tailored to your preferences
          </p>
        </div>

        <div>
          <Image src={Principle3} alt="" />
          <h2 className="text-2xl font-bold py-2">Cybersecurity Services</h2>
          <p>
            Protect your digital assets from evolving threats with our
            cybersecurity services. We conduct comprehensive risk assessments,
            implement robust security measures, and provide ongoing monitoring
            to safeguard your systems, data, and sensitive information.
          </p>
        </div>

        <div>
          <Image src={Principle4} alt="" />
          <h2 className="text-2xl font-bold py-2">
            Supply and Installation of ICT Hardware and Software
          </h2>
          <p>
            We offer a wide range of hardware equipment and software based on
            the platform agreed with clients. Our supllies are of the best
            quality and we have experts who are always ready to install and
            maintain this supplies. Based on agreements and contracts we stand
            by our words.
          </p>
        </div>

        <div>
          <Image src={Principle5} alt="" />
          <h2 className="text-2xl font-bold py-2">
            Digital Transformation Services:
          </h2>
          <p>
            Stay ahead of the curve with our digital transformation services. We
            guide organizations through technological shifts, helping them adopt
            new technologies, optimize processes, and unlock new opportunities
            for growth.
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
  );
};

export default Corevalues;
