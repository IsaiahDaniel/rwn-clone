"use client";

import React, { useState } from "react";
import Logo from "../../../assets/logo-remote-web.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="h-[100px] fixed top-0 right-0 w-full header-gradient-bg z-50 px-5 md:px-0">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <Image src={Logo} alt="Remoteweb" width={200} height={200} />
        </Link>

        <ul className="hidden relative md:flex items-center justify-between space-x-5 text-white">
          <li className="py-4 hover:border hover:border-primary/20 hover:bg-primary/20 hover:text-primary px-5 rounded-md">
            <Link href="/about">About</Link>
          </li>
          <li className="py-4 hover:border hover:border-primary/20 hover:bg-primary/20 hover:text-primary px-5 rounded-md">
            <Link href="/products">Products</Link>
          </li>
          <li onClick={() => setShowDropdown(!showDropdown)} className="py-4 hover:border hover:border-primary/20 hover:bg-primary/20 hover:text-primary px-5 rounded-md flex items-center">
            <span className="mr-2">Services</span>
            <MdArrowDropDown color="white" size={30} onClick={() => setShowDropdown(false)} />
          </li>
          { showDropdown && (
            <div className="bg-white py-3 px-4 absolute top-24 w-[490px]">
              <ul className="grid gap-3 grid-cols-2 text-purpleLight font-thin">
                <Link href="/services/it-support">IT Support</Link>
                <Link href="/services/consultancy">Consultancy</Link>
                <Link href='/services/cyber-security'>Cyber Security</Link>
                <Link href="/services/cloud">Cloud</Link>
                <Link href='/services/home-automation'>Home Automation</Link>
                <li>Supply and install ICT Hardware</li>
                <Link href="/services/software-development">Software Development</Link>  
                <li>IT Infrastructure Management</li>
              </ul>
            </div>
          )}

          <li className="py-4 hover:border hover:border-primary px-5 rounded-md">
            <Link href="/partners">Partners</Link>
          </li>
          <li className="py-4 px-5 rounded-md">
            <Button text="Hire Us" />
          </li>
        </ul>

        <div className="md:hidden" onClick={() => setShowMobileMenu(true)}>
          <AiOutlineMenu size={33} color="white" />
        </div>

        {showMobileMenu && (
          <div className="md:hidden absolute top-0 right-0 left-0 bottom-0 h-screen bg-[#303030] px-10 py-5">
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="Remoteweb" width={100} height={100} />

              <div onClick={() => setShowMobileMenu(false)}>
                <AiOutlineCloseCircle color="#fff" size={22} />
              </div>
            </div>

            
              <div className="px-2 mt-5 text-white">
                <ul className="divide-y-2 space-y-2 divide-white">
                  <li>About</li>
                  <li>
                    <Link href="/product">
                      Products
                    </Link>
                  </li>
                  <li className="py-2">Services</li>
                  <li className="py-2">Partners</li>
                </ul>
              </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
