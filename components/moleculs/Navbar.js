import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import useMode from "../../hooks/useMode";
import NavMobile from "./NavMobile";
import { navLink } from "../../utils/data";

const Navbar = ({ router }) => {
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useMode();

  return (
    <div className="container h-32 flex items-center mx-auto px-5 bg-transparent justify-between lg:justify-start">
      <div className="absolute hidden lg:block -top-60 -left-14 opacity-20">
        <Image src="/vector.png" width={720} height={380} />
      </div>

      {/* <a href="#" className="text-gray-800 text-4xl font-bold uppercase z-10 ">
        Brand
      </a> */}
      <Link href="/">
        <a>
          <Image src="/emoji.png" width={70} height={70} />
        </a>
      </Link>

      <NavMobile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        colorTheme={colorTheme}
        setTheme={setTheme}
      />
      <div className="lg:flex w-full ml-12 items-center justify-between z-10 hidden">
        <div className="">
          {navLink.map((nav) => (
            <Link href={nav.href}>
              <a
                className={`${
                  nav.href === path ? "text-cyan-500 dark:text-cyan-400" : ""
                } mr-6 font-medium text-gray-600 text-lg hover:underline hover:opacity-50 dark:text-white`}
              >
                {nav.title}
              </a>
            </Link>
          ))}
        </div>
        <div
          className="cursor-pointer lg:flex hidden p-2 rounded-full bg-cyan-500 shadow-md dark:bg-gray-900"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="lg:hidden block w-8 h-8 cursor-pointer dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default withRouter(Navbar);
