import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import NavMobile from "./NavMobile";
import { navLink } from "../../utils/data";
import { Toggle3 } from "../atoms/Toggle";

const Navbar = ({ router }) => {
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container h-32 flex items-center mx-auto px-5 bg-transparent justify-between lg:justify-start">
      <div className="absolute hidden lg:block -top-60 -left-14 opacity-20">
        <Image src="/vector.png" width={720} height={380} />
      </div>
      <Link href="/">
        <a className="text-3xl bg-gradient-to-b from-gray-800 to-gray-400 dark:from-cyan-600 dark:to-cyan-400 inline text-transparent bg-clip-text font-bold">
          RANGDRA
        </a>
      </Link>

      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:flex w-full ml-8 items-center justify-between z-10 hidden">
        <div className="">
          {navLink.map((nav, idx) => (
            <Link key={idx} href={nav.href}>
              <a
                className={`${
                  nav.href === path
                    ? "text-cyan-500 dark:text-cyan-400 underline"
                    : ""
                } mr-6 font-medium text-gray-600 text-lg hover:underline hover:opacity-50 dark:text-white`}
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

export default withRouter(Navbar);
