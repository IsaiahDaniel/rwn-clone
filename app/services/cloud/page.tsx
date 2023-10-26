import Image from "next/image";
import React from "react";

import CloudImg from "../../../public/assets/cloud-1.png";
import CloudImg2 from "../../../public/assets/cloud-2.png";
import Header from "../../components/Layout/Header";
import Navbar from "@/app/components/Layout/Navbar";

const Cloud = () => {
  return (
    <>
      <Navbar />

      <section className="w-[80%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-36">
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex items-start justify-start">
              <Image
                src={CloudImg}
                alt="About Image"
                className="rounded-2xl items-start"
              />
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold text-purpleLight">CLOUD INFRASTRUCTURE</h2>
            <p className="text-purpleLight">
              As your business grows, so does the demand for dynamic and
              efficient IT environments. Our mission at RemotewebNET is simple:
              Enable our clients to scale efficiently by providing the best
              solution tools to streamline their IT infrastructure.
            </p>

            <p className="text-purpleLight">
              RemotewebNET comprises a dedicated team which focuses on our
              client's needs to deliver effective results at each milestone.
              Using a step-by-step approach ensures that attention is given to
              each aspect of the project for a successful outcome.
            </p>

            <p className="text-purpleLight">
              To maximize benefits to our clients, staff, shareholders, and the
              communities we operate in. Remotewebnet Dynamics aligns itself
              with the guiding principles of visibility, velocity, and value. We
              provide the best goods and services in our field. We value
              fidelity, cooperation, and honesty.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-28">

          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold text-purpleLight">Azure</h2>
            <p className="text-purpleLight">
              As your business grows, so does the demand for dynamic and
              efficient IT environments. Our mission at RemotewebNET is simple:
              Enable our clients to scale efficiently by providing the best
              solution tools to streamline their IT infrastructure.
            </p>

            <p className="text-purpleLight">
              RemotewebNET comprises a dedicated team which focuses on our
              client's needs to deliver effective results at each milestone.
              Using a step-by-step approach ensures that attention is given to
              each aspect of the project for a successful outcome.
            </p>

            <p className="text-purpleLight">
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
                src={CloudImg2}
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

export default Cloud;
