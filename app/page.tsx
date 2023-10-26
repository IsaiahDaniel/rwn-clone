"use client";

import React, { useState } from "react";

import Navbar from "./components/Layout/Navbar";
import TechnologyImage from "../assets/technology.png";
import HexagonRight from "../assets/right-pills.svg";
import HexagonLeft from "../assets/left-pills.svg";

import ChatIcon from "../assets/icons/ri_chat-smile-3-fill.svg";
import ArrowDown from "../assets/icons/down-arrow.svg";
import SpeclizeAbout from "../assets/specilize-about.png";

import ServiceIconOne from "../assets/software-tools/cloud.svg";
import ServiceIconTwo from "../assets/software-tools/mobile-dev.svg";
import ServiceIconThree from "../assets/software-tools/ui-ux.svg";
import ServiceIconFour from "../assets/software-tools/web-dev.svg";

import LogoOne from "../assets/logos/Palladium_Logo 1.svg";
import LogoTwo from "../assets/logos/Palladium_Logo 1.svg";
import LogoThree from "../assets/logos/Palladium_Logo 1.svg";
import LogoFour from "../assets/logos/Palladium_Logo 1.svg";

import ServiceImg1 from "../assets/services/service-1.png";
import ServiceImg3 from "../assets/services/service-1.png";
import ServiceImg2 from "../assets/services/service-1.png";
import ServiceImg4 from "../assets/services/service-1.png";

import ClockIcon from "../assets/icons/time.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import MailIcon from "../assets/icons/mail.svg";

import Image from "next/image";
import Button from "./components/UI/Button";
import Card from "./components/shared/Card";

import PortfolioOne from "../public/assets/portfolio-1.png";
import { truncate } from "@/utils";

const Home = () => {
  const SERVICES_CARD = [
    {
      id: 1,
      title: "UI/UX & Product Design",
      subText:
        "We promote a collaborative and supportive work environment, valuing the contributions of each team member",
      icon: ServiceIconOne,
    },
    {
      id: 2,
      title: "UI/UX & Product Design",
      subText:
        "We promote a collaborative and supportive work environment, valuing the contributions of each team member",
      icon: ServiceIconTwo,
    },
    {
      id: 3,
      title: "UI/UX & Product Design",
      subText:
        "We promote a collaborative and supportive work environment, valuing the contributions of each team member",
      icon: ServiceIconThree,
    },
    {
      id: 4,
      title: "UI/UX & Product Design",
      subText:
        "We promote a collaborative and supportive work environment, valuing the contributions of each team member",
      icon: ServiceIconFour,
    },
  ];

  const LOGOS = [
    { id: 1, image: LogoOne },
    { id: 2, image: LogoTwo },
    { id: 3, image: LogoThree },
    { id: 4, image: LogoFour },
    { id: 5, image: LogoOne },
  ];

  const SERVICES = [
    {
      id: 1,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
      image: ServiceImg1,
    },
    {
      id: 2,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
    },
    {
      id: 3,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
      image: ServiceImg2,
    },
    {
      id: 4,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
      image: ServiceImg3,
    },
    {
      id: 5,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
      image: ServiceImg4,
    },
    {
      id: 5,
      text: "Consultancy",
      subText:
        "Our consultancy services are the cornerstone of our offerings. With a deep understanding of industry trends and best practices, we provide tailored guidance to help businesses make informed decisions. Our experts collaborate closely with offering strategic insights, technology roadmaps, and optimization strategies to align IT initiatives with organizational goals.",
      image: ServiceImg4,
    },
  ];

  // const [truncatedText, setTruncatedText] = useState(false);

  const [truncatedText, setTruncatedText] = useState(
    Array(SERVICES.length).fill(true)
  );

  const toggleTruncation = (index: number) => {
    setTruncatedText((prevTruncatedText) => {
      const updatedTruncatedText = [...prevTruncatedText];
      updatedTruncatedText[index] = !updatedTruncatedText[index];
      return updatedTruncatedText;
    });
  };

  return (
    <main>
      <Navbar />
      <main>
        <section className="absolute top-0 right-0 left-0 bg-[#090E2F] h-[800px]">
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
          <div className="flex flex-col items-center justify-center text-center h-full text-white">
            <div className="w-[70%] flex flex-col items-center justify-center text-center">
              <div>
                <h1 className="md:text-[62px] font-extrabold flex items-center text-center">
                  <span className="mr-4">We leverage</span>
                  <Image
                    src={TechnologyImage}
                    width={300}
                    height={100}
                    alt=""
                  />
                  <span>to simplify</span>
                </h1>
                <h1 className="text-xl md:text-[52px] font-extrabold flex items-center justify-center mt-7 text-center">
                  and Improve the way you work
                </h1>
              </div>
              <p className="mt-10">
                We build and maintain Software products across Fintech, Data
                Analytics, AI, <br /> E-commerce while offering top-notch IT
                Support Service
              </p>
              <Button text="Hire Us" classNames="mt-10" />
            </div>
            <div className="flex items-center">
              <div className="absolute left-10 bottom-10">
                <Image src={ChatIcon} width={70} height={70} alt="" />
              </div>
              <div className="absolute right-10 bottom-10">
                <Image src={ArrowDown} width={70} height={70} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <section className="mt-[900px] grid grid-cols-1 gap-5 md:grid-cols-2 items-center px-4 md:px-0">
            <div>
              <div>
                <h2 className="text-primary">About RemotewebNet Dynamics</h2>
                <h1 className="text-4xl mt-4 text-purpleLight">
                  We Specialise in Providing Cost-effective Digital Solution
                </h1>
                <p className="text-purpleLight mt-4">
                  RemotewebNET Dynamics Ltd. is a leading IT company that
                  specialises in providing innovative and cost-effective digital
                  solutions to clients worldwide. Since its inception in 2012,
                  the company has been at the forefront of the technology
                  landscape, delivering high-quality services in web
                  development, mobile App development, software solutions,
                  Support, digital marketing amongst others.
                </p>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <Image src={SpeclizeAbout} width={600} height={600} alt="" />
            </div>
          </section>
        </section>

        <section className="relative top-0 right-0 left-0 bg-[#090E2F] h-full md:h-[1000px]">
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

          <div className="flex flex-col items-center justify-center text-center h-full text-white mt-36">
            <div className="w-[70%] flex flex-col items-center justify-center text-center">
              <h1 className="text-xl md:text-[52px] font-extrabold flex items-center justify-center leading-10 mt-7 text-center">
                We deliver exceptionally efficient and secure software
                applications with seamless user experience
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-20 z-30">
                {SERVICES_CARD.map((card) => (
                  <Card classNames="w-[300px] h-auto px-3 py-5">
                    <div className="mb-3">
                      <Image src={card.icon} alt="" />
                    </div>
                    <div>
                      <h1 className="text-purpleLight text-left text-xl mb-5">
                        {card.title}
                      </h1>
                      <p className="text-purpleLight text-left text-sm">
                        {card.subText}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <h2 className="text-4xl text-white mt-28">Our Client</h2>
          </div>

          <div className="mt-64 md:absolute -bottom-20 left-[20%] right-[14%] mx-auto">
            <div>
              <Card classNames="flex items-center justify-center gap-10 py-10 rounded-none cursor-pointer">
                {LOGOS.map((logo) => (
                  // <div className="hover:border px-5 py-6">
                  //   <Image src={logo.image} alt="" width={150} className="hover:scale-125" />
                  // </div>
<div className="hover:border px-5 py-6 transition-opacity duration-200">
  <Image src={logo.image} alt="" width={150} className="hover:scale-125 opacity-0 hover:opacity-100" />
</div>


                ))}
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F6FF] px-10 py-48">
          <div className="w-[80%] mx-auto">
            <span className="text-[#EB267A] text-xl w-[50%]">Our Services</span>
            <div>
              <h2 className="md:text-3xl">
                we bring cutting-edge technological solutions to the table to
                enhancing efficiency and productivity.
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5 z-30">
                {SERVICES.map((card, index) => (
                  <Card classNames="" key={card.id}>
                    <div className="mb-3 w-full">
                      <Image src={card.image} className="w-full" alt="" />
                    </div>
                    <div className="p-5">
                      <h1 className="text-purpleLight text-left text-xl mb-5">
                        {card.text}
                      </h1>
                      <p className="text-purpleLight text-left text-sm">
                        {truncatedText[index]
                          ? truncate(card.subText, 200)
                          : card.subText}
                      </p>
                      <p
                        className="text-right"
                        onClick={() => toggleTruncation(index)}
                      >
                        {truncatedText[index] ? "See All" : "Collapse"}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-0 py-10">
          <div className="w-[90%] mx-auto">
            <span className="text-[#EB267A]">Portfolio</span>
            <h1 className="text-[52px] text-purpleLight">
              This are few of our completed projects.
            </h1>

            <main>
              <h1>This are few of our completed projects.</h1>
              <div className="md:flex">
                <div>
                  <div
                    style={{
                      backgroundImage: `url('/assets/portfolio-1.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      height: 500,
                      width: 700,
                    }}
                    className=""
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <Button text="Vist Website" outline />
                    </div>
                  </div>

                  <h2>Kobokolet Data Collection Tool</h2>
                  <p className="w-[80%] mb-4">
                    Kobokolet is a tool to register small holder farmers and
                    their farms in the KoboWeb ecosystem, enabling them to
                    access 0% input loans, improve market connections, and
                    achieve financial inclusion.
                  </p>
                </div>

                <div className="md:mt-64">
                  <div
                    style={{
                      backgroundImage: `url('/assets/portfolio-2.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      height: 500,
                      width: 700,
                    }}
                    className=""
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <Button text="Vist Website" outline />
                    </div>
                  </div>
                  <h2>Kobokolet Data Collection Tool</h2>
                  <p>
                    Kobokolet is a tool to register small holder farmers and
                    their farms in the KoboWeb ecosystem, enabling them to
                    access 0% input loans, improve market connections, and
                    achieve financial inclusion.
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    backgroundImage: `url('/assets/portfolio-1.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 500,
                    width: 700,
                  }}
                  className="relative cursor-pointer"
                >
                  <div
                    className={
                      "hover:bg-[rgba(0,0,0,0.3)] h-full w-full bg-white/2 z-0 absolute top-0 left-0 right-0 bottom-0"
                    }
                  />
                  <div className="flex flex-col items-center justify-center h-full">
                    <Button text="Vist Website" outline classNames="z-50" />
                  </div>
                </div>
                <h2>Kobokolet Data Collection Tool</h2>
                <p className="w-full md:w-[50%]">
                  Kobokolet is a tool to register small holder farmers and their
                  farms in the KoboWeb ecosystem, enabling them to access 0%
                  input loans, improve market connections, and achieve financial
                  inclusion.
                </p>
              </div>
            </main>
          </div>
        </section>

        <main>
          <section className="relative top-0 right-0 left-0 bg-[#090E2F] h-full md:h-[800px]">
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

            <div className="container mx-auto flex flex-col justify-center h-full">
              <div className="md:flex justify-between px-10 md:px-20 text-white">
                <div className="my-10">
                  <h1 className="text-white text-3xl md:text-5xl mb-7">
                    Need a Custom <br /> Solution?
                  </h1>
                  <p className="w-full md:w-[70%] text-xl">
                    We understand one size doesn't fit all. We can work with you
                    to define and develop a custom solution that meets your
                    needs.
                  </p>
                </div>

                <div>
                  <textarea
                    className="bg-[#0D154B] rounded-md border border-[#4E589C] px-2 w-full py-2 h-[100px]"
                    placeholder="message"
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#0D154B] rounded-md w-full border border-[#4E589C] py-5 px-2"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="bg-[#0D154B] rounded-md w-full border border-[#4E589C] py-5 px-2 mt-5"
                  />
                  <br />
                  <div className="flex items-end justify-end mt-5">
                    <Button outline text="Send" />
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-10">
                <div className="w-[90vw]">
                  <Card classNames="grid grid-cols-2 md:grid-cols-4 py-10 px-5 glass-bg-card w-full text-white">
                    <div>
                      <Image
                        src={ClockIcon}
                        width={50}
                        height={50}
                        alt=""
                        className="mb-5"
                      />
                      <h2>Working Hours</h2>
                      <div>
                        <p>Monday to Friday</p>
                        <p>8:00 - 5:00pm</p>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={PhoneIcon}
                        width={50}
                        height={50}
                        alt=""
                        className="mb-5"
                      />
                      <h2>Call Us</h2>
                      <div>
                        <p>Monday to Friday</p>
                        <p>8:00 - 5:00pm</p>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={ClockIcon}
                        width={50}
                        height={50}
                        alt=""
                        className="mb-5"
                      />
                      <h2>Working Hours</h2>
                      <div>
                        <p>Monday to Friday</p>
                        <p>8:00 - 5:00pm</p>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={MailIcon}
                        width={50}
                        height={50}
                        alt=""
                        className="mb-5"
                      />
                      <h2>Working Hours</h2>
                      <div>
                        <p>Monday to Friday</p>
                        <p>8:00 - 5:00pm</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="mt-72"></div>
      </main>
    </main>
  );
};

export default Home;
