import React, { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const NavMobile = ({ isOpen, setIsOpen, router, colorTheme, setTheme }) => {
  const path = router.pathname;
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full opacity-40"
      } absolute top-0 right-0 bg-gradient-to-br from-cyan-300 to-teal-200 min-h-screen transform  lg:hidden w-1/2 flex flex-col items-end justify-around pr-4 transition duration-500 z-10 dark:from-gray-800 dark:to-gray-600`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer dark:text-white"
        onClick={() => setIsOpen(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="flex flex-col h-64 justify-between">
        <Link href="/">
          <a
            className={`${
              "/" === path
                ? "text-white dark:text-cyan-400 underline"
                : "text-gray-800 dark:text-white"
            } font-medium text-lg hover:underline hover:opacity-50 tracking-widest uppercase`}
          >
            Home
          </a>
        </Link>

        <Link href="/blog">
          <a
            className={`${
              "/blog" === path
                ? "text-white dark:text-cyan-400 underline"
                : "text-gray-800 dark:text-white"
            } font-medium text-lg hover:underline hover:opacity-50 tracking-widest uppercase`}
          >
            Blog
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={`${
              "/projects" === path
                ? "text-white dark:text-cyan-400 underline"
                : "text-gray-800 dark:text-white"
            } font-medium text-lg hover:underline hover:opacity-50 tracking-widest uppercase`}
          >
            Projects
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${
              "/about" === path
                ? "text-white dark:text-cyan-400 underline"
                : "text-gray-800 dark:text-white"
            } font-medium text-lg hover:underline hover:opacity-50 tracking-widest uppercase`}
          >
            About
          </a>
        </Link>
      </div>
      <div
        className="cursor-pointer lg:hidden block p-2 rounded-full bg-cyan-500 shadow-md dark:bg-gray-900"
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
  );
};

export default withRouter(NavMobile);
