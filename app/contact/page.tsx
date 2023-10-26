import React from "react";
import Header from "../components/Layout/Header";

import ContactImg from "../../public/assets/Mapsicle-Map.png";
import Image from "next/image";

type InputType = {
  [x: string]: any;
};

const Input = ({ ...props }: InputType) => {
  return (
    <div className="w-full">
      <input type="text" className="outline-none border-b w-full" {...props} />
    </div>
  );
};

const contact = () => {
  return (
    <>
      <Header>
        <section className="w-[80%] mx-auto text-white py-10">
          <h2 className="text-3xl">About Us</h2>
          <p>Homepage {">"} Contact</p>
        </section>
      </Header>
      {/* <section className="w-[80%] mx-auto py-28">
        <div className="grid grid-cols-11 md:grid-cols-22">
            <div>
                <h2 className="text-3xl">Contact Us</h2>
                <div className="bg-blue-4000 mt-10">
                    
                        <Input placeholder="Full name*" />
                    
                    <div>
                        <Input placeholder="Full name*" />
                    </div>
                    <div>
                        <Input placeholder="Full name*" />
                    </div>
                    <div>
                        <Input placeholder="Full name*" />
                    </div>
                </div>
                <div className="w-full">
                    <Input />
                </div>

                <div>
                    <button className="bg-[#293586] px-5 py-5 text-white rounded-xl mt-4">
                        Send Message
                    </button>
                </div>
            </div>
            <div>
                <Image src={ContactImg} alt="Contact Image" />
            </div>
        </div>
      </section> */}

      <section className="w-[80%] mx-auto">
        <div className="flex-col flex md:flex-row items-center justify-between flex-wrap py-10 space-x-2">
          <div className="space-y-5 flex-1">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <div className="mr-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <div>
                  <Input placeholder="Full name*" />
                </div>

                <div>
                  <Input placeholder="Email*" />
                </div>

                <div className="mt-5">
                  <Input placeholder="Phone Number*" />
                </div>
                <div className="mt-5">
                  <Input placeholder="Address*" />
                </div>
              </div>

              <div className="w-full mt-10">
                <Input placeholder="Company*" />
              </div>

              <div className="w-full mt-10">
                <Input placeholder="Message*" />
              </div>

              <button className="bg-[#293586] px-5 py-5 text-white rounded-xl mt-10">
                Send Message
              </button>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex items-end justify-end">
              <Image
                src={ContactImg}
                alt="AboutImg Image"
                className="rounded-2xl items-end"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;


// isaiah.daniel@koboweb.com