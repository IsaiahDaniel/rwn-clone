import Image from "next/image";
import React from "react";

import ItsupportImg from "../../../public/assets/it-support.png";
import ItsupportImg2 from "../../../public/assets/it-support-2.png";
import Header from "../../components/Layout/Header";
import Navbar from "@/app/components/Layout/Navbar";

type Props = {};

const ITSupport = (props: Props) => {
  return (
    <>
      <Navbar />

      <section className="w-[80%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-36">
          <div className="flex-1">
            <div className="flex items-start justify-start">
              <Image
                src={ItsupportImg}
                alt="About Image"
                className="rounded-2xl items-start"
              />
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold text-purpleLight">
              IT Support Services
            </h2>
            <p className="text-purpleLight">
              Through structured cabling we assist you in designing your space
              effectively. You receive services from a group of specialists with
              lots of practical expertise. Our data cabling installation crew is
              well-versed in the most recent technology, has undergone extensive
              training, abides by industry rules and regulations, and only uses
              authentic materials. In Nigeria, we provide structured cabling
              services in a variety of locations and settings. We personalize
              our solution designs to your organization's equipment demands,
              both now and in the future, while also taking into account
              elements such as your building structure, existing infrastructure,
              cable type, and installation function.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold text-purpleLight">
              IT Support Services
            </h2>
            <p className="text-purpleLight">
              RemotewebNET is a trustworthy Crisis Management Partner for
              businesses in Abuja, Nigeria. We develop all-in-one powerful
              solutions for emergencies and critical situations, allowing you to
              respond quickly and appropriately in such a situation.
            </p>

            <p className="text-purpleLight">
              Businesses may set up fully controlled operator workstations and
              real-time control rooms using our advanced crisis management
              platform software. Our crisis experts assess your existing
              infrastructure risks and emergency readiness to build, manage, and
              support a crisis management solution that is tailored to your
              specific needs.
            </p>

            <p className="text-purpleLight">
              We provide complete visualization tools for your control rooms,
              allowing you to monitor your business-critical activities from a
              single screen or shared screen wall. We also offer advice and
              training on how to recover from such catastrophes with as little
              disruption or loss of business as possible.RemotewebNET manages
              all aspects of your crisis management and business continuity
              activities, backed by intelligence-driven solutions. Work with us
              to protect your company.  
            </p>
          </div>

          <div className="flex-1">
            <div className="flex items-end justify-end">
              <Image
                src={ItsupportImg2}
                alt="About Image"
                className="rounded-2xl items-end"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSupport;
