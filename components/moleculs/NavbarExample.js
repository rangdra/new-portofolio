import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import NavMobile from "./NavMobile";
import { navLink } from "../../utils/data";
import { Toggle3 } from "../atoms/Toggle";

const NavbarExample = ({ router }) => {
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container h-32 flex items-center mx-auto px-5 bg-transparent justify-between lg:justify-start">
      <div className="absolute hidden lg:block -top-60 -left-14 opacity-20">
        <Image src="/vector.png" width={720} height={380} />
      </div>
      <Link href="/">
        <a>
          <Image src="/emoji.png" width={50} height={50} />
        </a>
      </Link>
      <div
        className={`${
          isOpen
            ? "translate-x-0"
            : "translate-x-full lg:opacity-100 opacity-30"
        } flex lg:flex-row flex-col lg:w-full w-1/2 lg:ml-12 lg:items-center lg:justify-between justify-around items-end min-h-screen lg:static absolute top-0 right-0 lg:bg-none  bg-gradient-to-br from-cyan-300 to-teal-200 dark:from-gray-800 dark:to-gray-600 pr-8 lg:pr-0 lg:transform-none transform transition duration-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 cursor-pointer dark:text-white lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className=" flex flex-col lg:flex-row z-10 justify-between lg:justify-start h-64 lg:h-auto">
          {navLink.map((nav) => (
            <Link href={nav.href}>
              <a
                className={`${
                  nav.href === path
                    ? "lg:text-cyan-400 text-cyan-50 dark:text-cyan-400 underline lg:no-underline"
                    : "text-gray-800 dark:text-white"
                } lg:mr-6 hover:opacity-50 hover:underline font-medium text-lg tracking-widest lg:normal-case uppercase`}
              >
                {nav.title}
              </a>
            </Link>
          ))}
        </div>
        <Toggle3 />
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

export default withRouter(NavbarExample);
