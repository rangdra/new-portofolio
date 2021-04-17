import React, { useRef, useState, useEffect } from "react";
import CardProject from "../../components/atoms/CardProject";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ReactProjects = ({ basic, advance }) => {
  const refProject = useRef();
  const router = useRouter();
  console.log(router);
  const [isMobile, setIsMobile] = useState(false);

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
        className="sm:h-96 h-80 flex justify-center items-center bg-gray-800 flex-col"
        // style={{ height: 350 }}
      >
        <h1 className=" text-5xl text-center font-extrabold text-blue-400 tracking-wider">
          React Projects
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-blue-400 h-20 w-20 mt-8 animate-bounce cursor-pointer hover:text-blue-300"
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
        className="container mx-auto sm:px-24 px-5 mt-24"
        ref={refProject}
      >
        <h1 className="text-center text-4xl text-gray-800 font-semibold tracking-wide">
          Basic Projects
        </h1>

        <div className="mt-12">
          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-y-8 mt-12">
              {basic.map((item) => (
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
              {basic.map((item) => (
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
      <section className="container mx-auto sm:px-24 px-5 mt-12">
        <h1 className="text-center text-4xl text-gray-800 font-semibold tracking-wide">
          Advance Projects
        </h1>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 gap-y-8 my-12">
          {advance.map((item) => (
            <CardProject
              key={item?.id}
              image={item?.image}
              title={item?.title}
              tags={item?.tags}
              linkWeb={item?.linkWeb}
            />
          ))}
        </div> */}
        <div className="my-12">
          {/* <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {advance.map((item) => (
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
          </Swiper> */}

          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-y-8 mt-12">
              {basic.map((item) => (
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
              {advance.map((item) => (
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
  const res = await fetch("https://rangdrap.vercel.app/api/projects");
  const {
    react_projects: { basic, advance },
  } = await res.json();

  return {
    props: {
      basic,
      advance,
    },
  };
};
export default ReactProjects;
