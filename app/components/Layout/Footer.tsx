import React from "react";

type Props = {};

import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEditLocationAlt } from "react-icons/md";

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#FAFCFF]">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 py-14 space-y-3">
          <div className="md:col-span-3">
            <Image
              src="/assets/remote-web-logo.png"
              width={200}
              height={200}
              alt="Footer Logo"
              className="mb-5"
            />
            <p className="pr-10">
              Dedicated and Commited to building exceptional products and
              relationship towards businnes growth through technology.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Links</h2>
            <ul className="space-y-3">
              <li>Services</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Socials</h2>
            <ul className="space-y-3">
              <li>Facebook</li>
              <li>instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul className="space-y-3">
              <li className="flex">
                <BsTelephone />
                <p className="text-md">+2348067712197</p>
              </li>

              <li className="flex">
                <BsTelephone />
                <p className="text-md">Info@rwndynamics.com</p>
              </li>

              <li className="flex">
                <MdOutlineEditLocationAlt size={44} />
                <p className="text-md">
                  No.8 Madiana Close, Vetenary Council.Maitama Abuja, Nigeria.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center py-10">
        © 2023. RWNDynamics. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
