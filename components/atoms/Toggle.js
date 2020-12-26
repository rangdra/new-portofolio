import { ThemeContext } from "../../hooks/themeContext";
import { useContext } from "react";

export function Toggle({ onClick }) {
  return (
    <label
      htmlFor="toogleA"
      className="flex items-center cursor-pointer"
      onClick={onClick}
    >
      {/* toggle */}
      <div className="relative">
        {/* input */}
        <input id="toogleA" type="checkbox" className="hidden" />
        {/* line */}
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        {/* dot */}
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
      </div>
      {/* label */}
      <div className="ml-3 text-gray-700 font-medium">Dark Mode</div>
    </label>
  );
}

export const Toggle2 = () => {
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      {/* input */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6 text-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
      <div className="mx-2">
        <input id="toogleA" type="checkbox" class="hidden" />
        <div className="toggle_2_line w-10 h-6 rounded-full bg-gray-200 flex items-center">
          <div className="toggle_2_dot h-5 w-5 rounded-full bg-yellow-500 mx-1"></div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6 text-gray-500"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </label>
  );
};

export const Toggle3 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function isDark() {
    return theme === "dark";
  }
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      {/* toggle */}
      <div className="relative">
        {/* input */}
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        {/* line */}
        <div className="toggle_3_line w-10 h-6 bg-transparent rounded-full border-gray-300 border-4 dark:border-cyan-400 dark:bg-cyan-800"></div>
        {/* dot */}
        {/* <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div> */}
        <div className="bg-black toggle_3_dot w-7 h-7 -top-0.5 flex items-center justify-center absolute  rounded-full inset-y-0 left-0 transform -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-yellow-400 w-5 h-5"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </label>
  );
};

export const Toggle4 = () => {
  return (
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
  );
};
