const Hero = () => {
  return (
    <div className="mt-12 lg:mt-28 flex justify-between items-center flex-col-reverse lg:flex-row">
      <h1 className="text-3xl lg:text-5xl lg:mt-0 mt-6 leading-normal text-gray-800 dark:text-white font-semibold">
        Hi, I’m Rangdra, <br />
        <span>
          I’m an experienced web developer with deep interest in modern web
          development.
        </span>
      </h1>
      <div className="lg:w-3/4 w-full flex justify-center lg:mb-0 mb-6">
        <img className="w-72 h-72 rounded-full" src="/emoji.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
