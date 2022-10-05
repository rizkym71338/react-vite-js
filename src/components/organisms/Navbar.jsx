import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  const dataNavItem = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/services", name: "Services" },
    { href: "/pricing", name: "Pricing" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Vite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              React + Vite
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white gap-4">
              {dataNavItem.map((data, i) => (
                <li key={i}>
                  <Link
                    to={data.href}
                    className={`${
                      pathname == data.href
                        ? "text-white md:text-blue-700 md:bg-transparent bg-blue-700"
                        : "text-slate-900"
                    } block py-2 pr-4 pl-3 rounded-md hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-blue-700 transition-all duration-300 ease-in-out md:p-0`}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
