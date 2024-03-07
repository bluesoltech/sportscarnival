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
            <HoveredLink to="/">Upcoming Carnival</HoveredLink>
            <HoveredLink to="/team">Team</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Activities">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Art & Crafts"
              href="/activity/art"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Adventure"
              href="/activity/adventure"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/exhibitor">Exhibitor</HoveredLink>
            <HoveredLink to="/volunteer">Volunteer</HoveredLink>
            <HoveredLink to="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
