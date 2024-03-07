// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

const Navbar = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="" />
    </div>
  );
};

export default Navbar;

function Nav({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-1 inset-x-0 w-full mx-auto z-50 flex justify-center p-2",
        className
      )}
    >
      {/* <img
        src={Logo1}
        className="absolute left-0 w-[75px] md:w-[200px]"
        alt=""
      /> */}
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Upcoming Carnival</HoveredLink>
            <HoveredLink href="/individual">Team</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Activities">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Day 1"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Day 2"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Day 3"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Day 4"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Exhibitor</HoveredLink>
            <HoveredLink href="/individual">Volunteer</HoveredLink>
            <HoveredLink href="/team">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
