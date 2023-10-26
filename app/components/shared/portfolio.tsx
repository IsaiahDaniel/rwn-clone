import React from "react";

import PortfolioOne from "../../../public/assets/portfolio-1.png";
import PortfolioTwo from "../../../public/assets/portfolio-2.png";

import Image from "next/image";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <section className="w-[80%] mx-auto py-10">
        <div>
          <small>Portfolio</small>
          <h2>Here are some of our Completed work over the years.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Image src={PortfolioOne} alt="" width={590} />
            <h2 className="font-bold text-2xl py-5">
              Kobokolet Data Collection Tool
            </h2>
            <p>
              Kobokolet is a tool to register small holder farmers and their
              farms in the KoboWeb ecosystem, enabling them to access 0% input
              loans, improve market connections, and achieve financial
              inclusion.
            </p>
          </div>

          <div>
            <Image src={PortfolioTwo} alt="" width={590} />
            <h2 className="font-bold text-2xl py-5">
              Kobo-Pay Fintech Solution
            </h2>
            <p>
              A Financial Technology Solution Build to for everyone. We let you
              bank with ease even without internet connection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
