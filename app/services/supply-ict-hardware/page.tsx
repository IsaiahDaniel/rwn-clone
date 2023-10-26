import Image from "next/image";
import React from "react";

import serviceImg from "../../../public/assets/service-img.png";
import Header from "../../components/Layout/Header";

type Props = {};

const SupplyIctHardware = (props: Props) => {
  return (
    <>
      <Header>
        <section className="w-[80%] mx-auto text-white py-10">
          <h2 className="text-3xl">Cloud Infrastructure</h2>
          <p>Homepage {">"} About Us</p>
        </section>
      </Header>

      <section className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold">Mission and Vision</h2>
            <p>
              As your business grows, so does the demand for dynamic and
              efficient IT environments. Our mission at RemotewebNET is simple:
              Enable our clients to scale efficiently by providing the best
              solution tools to streamline their IT infrastructure.
            </p>

            <p>
              RemotewebNET comprises a dedicated team which focuses on our
              client's needs to deliver effective results at each milestone.
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

          <div className="flex-1">
            <div className="flex items-end justify-end">
              <Image
                src={serviceImg}
                alt="About Image"
                className="rounded-2xl items-end bg-red-900"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">On Call Support</h2>
          <div>
            <p className="mb-5">
              RemotewebNET is a trustworthy Crisis Management Partner for
              businesses in Abuja, Nigeria. We develop all-in-one powerful
              solutions for emergencies and critical situations, allowing you to
              respond quickly and appropriately in such a situation. Businesses
              may set up fully controlled operator workstations and real-time
              control rooms using our advanced crisis management platform
              software. Our crisis experts assess your existing infrastructure
              risks and emergency readiness to build, manage, and support a
              crisis management solution that is tailored to your specific
              needs. We provide complete visualization tools for your control
              rooms, allowing you to monitor your business-critical activities
              from a single screen or shared screen wall. We also offer advice
              and training on how to recover from such catastrophes with as
              little disruption or loss of business as possible.RemotewebNET
              manages all aspects of your crisis management and business
              continuity activities, backed by intelligence-driven solutions.
              Work with us to protect your company.
            </p>
            <p>
              RemotewebNET is a trustworthy Crisis Management Partner for
              businesses in Abuja, Nigeria. We develop all-in-one powerful
              solutions for emergencies and critical situations, allowing you to
              respond quickly and appropriately in such a situation. Businesses
              may set up fully controlled operator workstations and real-time
              control rooms using our advanced crisis management platform
              software. Our crisis experts assess your existing infrastructure
              risks and emergency readiness to build, manage, and support a
              crisis management solution that is tailored to your specific
              needs. We provide complete visualization tools for your control
              rooms, allowing you to monitor your business-critical activities
              from a single screen or shared screen wall. We also offer advice
              and training on how to recover from such catastrophes with as
              little disruption or loss of business as possible.RemotewebNET
              manages all aspects of your crisis management and business
              continuity activities, backed by intelligence-driven solutions.
              Work with us to protect your company.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplyIctHardware;
