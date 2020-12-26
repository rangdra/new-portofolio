import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="mt-0 lg:mt-20 flex justify-between items-center flex-col-reverse lg:flex-row">
      <h1 className="text-3xl  lg:text-5xl lg:mt-0 mt-6 leading-normal text-gray-800 dark:text-white font-semibold">
        Hi, I’m Rangdra, <br />
        <span>
          I’m an experienced web developer with deep interest in modern web
          development.
        </span>
      </h1>
      <div className="w-full flex justify-center lg:mb-0 mb-6">
        {theme === "light" ? (
          <img className="w-full h-80" src="/hero-img.png" alt="" />
        ) : (
          <img className="w-full h-80" src="/hero-img-dark.png" alt="" />
        )}
      </div>
    </div>
  );
};

export default Hero;
