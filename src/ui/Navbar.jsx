import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between pt-6 md:pt-0  items-center mt-1 m-auto px-6">
      <div className=" text-sm font-bold text-gray-500">
        Mini - HR Management System
      </div>
      <div className="hidden md:block text-center rounded-full bg-gray-100 border border-gray-200 w-[60px] h-[60px]">
        Profile
      </div>
    </div>
  );
};

export default Navbar;
