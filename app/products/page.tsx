import React from "react";
import Image from "next/image";
import Navbar from "../components/Layout/Navbar";

type Props = {};

const products = (props: Props) => {
  return (
    <>
      <Navbar />

      <section className="py-52 w-[80%] mx-auto">
        <span className="text-[#EB267A]">Portfolio</span>
        <h1 className="text-[52px] text-purpleLight">This are few of our completed projects.</h1>

        <main>
          <div className="flex">
            <div>
              <Image
                src="/assets/portfolio-1.png"
                alt=""
                width={600}
                height={500}
              />
              <h2>Kobokolet Data Collection Tool</h2>
              <p>
                Kobokolet is a tool to register small holder farmers and their
                farms in the KoboWeb ecosystem, enabling them to access 0% input
                loans, improve market connections, and achieve financial
                inclusion.
              </p>
            </div>

            <div className="mt-64">
              <Image
                src="/assets/portfolio-1.png"
                alt=""
                width={600}
                height={500}
              />
              <h2>Kobokolet Data Collection Tool</h2>
              <p>
                Kobokolet is a tool to register small holder farmers and their
                farms in the KoboWeb ecosystem, enabling them to access 0% input
                loans, improve market connections, and achieve financial
                inclusion.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/assets/portfolio-1.png"
              alt=""
              width={600}
              height={500}
            />
            <h2>Kobokolet Data Collection Tool</h2>
            <p>
              Kobokolet is a tool to register small holder farmers and their
              farms in the KoboWeb ecosystem, enabling them to access 0% input
              loans, improve market connections, and achieve financial
              inclusion.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default products;
