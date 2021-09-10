import React, { useState } from "react";
import Button from "./Button";

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="lg:flex lg:justify-between lg:px-7 lg:py-2 xl:px-24">
      <div className="flex items-center justify-between px-6 py-3 lg:p-0">
        {/* logo */}
        <h1 className="font-mono text-xl font-bold tracking-wide text-purple-500 cursor-pointer sm:text-2xl xl:text-3xl">
          Anmol Sharma
        </h1>

        {/* menu button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-purple-500 sm:w-9 sm:h-9 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {!toggleMenu ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </div>

      {/* menu items */}
      <ul
        className={
          toggleMenu
            ? "flex flex-col items-center justify-between py-5 transition-all ease-in-out duration-700 lg:flex lg:flex-row lg:items-center"
            : "lg:flex lg:flex-row lg:items-center hidden"
        }
      >
        <li className="my-4 text-lg cursor-pointer link-hover lg:ml-16">
          Home
        </li>
        <li className="my-4 text-lg cursor-pointer link-hover lg:ml-16">
          About
        </li>
        <li className="my-4 text-lg cursor-pointer link-hover lg:ml-16">
          Github
        </li>
        <li className="my-4 ">
          <Button content="Say Hi" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
