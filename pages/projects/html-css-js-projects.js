import React, { useRef, useState, useEffect } from "react";
import CardProject from "../../components/atoms/CardProject";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Head from "next/head";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HtmlCssJsProjects = ({ data }) => {
  const refProject = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  function showMostPicked() {
    window.scrollTo({
      top: refProject.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  const showMobile = () => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    showMobile();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", showMobile);
  }
  return (
    <>
      <Head>
        <title>HTML | CSS | JS Projects</title>
      </Head>
      <div
        className="group flex items-center absolute top-4 left-4 cursor-pointer"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="sm:h-6 sm:w-6 h-4 w-4 text-white group-hover:text-gray-300 transition-all duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <p className="text-white sm:text-base text-sm ml-2 group-hover:text-gray-300 transition-all duration-200">
          Go Back
        </p>
      </div>
      <div
        className="sm:h-96 h-80  flex justify-center items-center bg-orange-800 flex-col"
        // style={{ height: 350 }}
      >
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-wider text-center">
          <span className="text-orange-500">HTML,</span>{" "}
          <span className="text-blue-400">CSS & </span>{" "}
          <span className="text-yellow-300">JS.</span>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-200 h-16 w-16 sm:h-20 sm:w-20 sm:mt-8 mt-4 animate-bounce cursor-pointer hover:text-gray-50 bg-clip-text"
          onClick={showMostPicked}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <section
        className="container mx-auto sm:px-24 px-5 mt-12"
        ref={refProject}
      >
        <h1 className="text-center text-4xl text-gray-800 font-semibold tracking-wide">
          Projects
        </h1>
        <div className="my-12">
          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-y-8 mt-12">
              {data.map((item) => (
                <CardProject
                  key={item?.id}
                  image={item?.image}
                  title={item?.title}
                  tags={item?.tags}
                  linkWeb={item?.linkWeb}
                />
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.map((item) => (
                <SwiperSlide>
                  <CardProject
                    key={item?.id}
                    image={item?.image}
                    title={item?.title}
                    tags={item?.tags}
                    linkWeb={item?.linkWeb}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://rapangestu.vercel.app/api/projects`);
  const { html_css_projects } = await res.json();

  return {
    props: {
      data: html_css_projects,
    },
  };
};
export default HtmlCssJsProjects;
