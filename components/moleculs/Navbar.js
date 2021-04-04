import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import { Toggle3 } from "../atoms/Toggle";

const Navbar = ({ router }) => {
  const path = router.pathname;
  const [click, setClick] = useState(false);

  const getNavLinkClass = (link) => {
    if (link === path) {
      return "text-cyan-500 underline dark:text-cyan-500";
    }
    return " text-gray-800 dark:text-gray-50";
  };

  const [isMobile, setIsMobile] = useState(true);
  const showMobile = () => {
    if (window.innerWidth <= 640) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    showMobile();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", showMobile);
  }

  return (
    <div className="container h-32 flex items-center mx-auto sm:px-5 px-5 bg-transparent justify-between ">
      <div className="absolute hidden lg:block -top-60 -left-14 opacity-20">
        <Image src="/vector.png" width={720} height={380} />
      </div>
      <div className="flex items-center z-30">
        <Link href="/">
          <a className="text-3xl bg-gradient-to-b from-gray-800 to-gray-400 dark:from-cyan-600 dark:to-cyan-400 inline text-transparent bg-clip-text font-bold tracking-wide">
            RANGDRA
          </a>
        </Link>
        <ul
          className={`flex items-center sm:ml-6 ml-0 nav-menu ${
            click ? " active" : ""
          }`}
        >
          <li className="sm:mb-0 mb-4 sm:mt-0 mt-12">
            <Link href="/">
              <a
                className={`hover:opacity-60 hover:underline text-2xl sm:text-lg tracking-wider ${getNavLinkClass(
                  "/"
                )}`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="sm:my-0 my-4">
            <Link href="/projects">
              <a
                className={`hover:opacity-60 hover:underline text-2xl sm:text-lg tracking-wider mx-4 ${getNavLinkClass(
                  "/projects"
                )}`}
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="sm:my-0 my-4">
            <Link href="/about">
              <a
                className={`hover:opacity-60 hover:underline text-2xl sm:text-lg tracking-wider ${getNavLinkClass(
                  "/about"
                )}`}
              >
                About
              </a>
            </Link>
          </li>
          {!isMobile && (
            <li className="flex items-center mt-4">
              <Toggle3 />{" "}
              <span className="ml-4 dark:text-gray-50 text-gray-800 text-xl sm:text-lg">
                Dark mode!
              </span>
            </li>
          )}
        </ul>
      </div>
      {isMobile ? (
        <Toggle3 />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-gray-800 cursor-pointer dark:text-white"
          onClick={() => setClick(!click)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </div>
  );
};

export default withRouter(Navbar);
