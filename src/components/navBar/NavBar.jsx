import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
      <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
      <ul className="md:flex hidden font-semibold ">
        <li className="cursor-pointer mx-[10px]">Home</li>
        <li className="cursor-pointer mx-[10px]">About Us</li>
        <li className="cursor-pointer mx-[10px]">Contact Us</li>
      </ul>
      <div className="hidden md:block p-2 bg-indigo-700 text-white cursor-pointer font-bold rounded">
        Login/Signup
      </div>
      <div className="md:hidden">
        <a className="text-4xl" href="/">
          &#8801;
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
