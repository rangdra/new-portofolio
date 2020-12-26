import Link from "next/link";
import { withRouter } from "next/router";
import { navLink } from "../../utils/data";
import { Toggle3 } from "../atoms/Toggle";

const NavMobile = ({ isOpen, setIsOpen, router }) => {
  const path = router.pathname;
  return (
    <div
      className={`${
        isOpen
          ? "translate-x-0 lg:hidden block"
          : "translate-x-full opacity-40 hidden"
      } absolute top-0 right-0 bg-gradient-to-br from-cyan-300 to-teal-200 min-h-screen transform  lg:hidden w-1/2 flex flex-col items-end justify-around pr-4 z-10 dark:from-gray-800 dark:to-gray-600 transition duration-500`}
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
        {navLink.map((nav, idx) => (
          <Link key={idx} href={nav.href}>
            <a
              className={`${
                nav.href === path
                  ? "text-white dark:text-cyan-400 underline"
                  : "text-gray-800 dark:text-white"
              } font-medium text-lg hover:underline hover:opacity-50 tracking-widest uppercase`}
            >
              {nav.title}
            </a>
          </Link>
        ))}
      </div>
      <Toggle3 />
    </div>
  );
};

export default withRouter(NavMobile);
