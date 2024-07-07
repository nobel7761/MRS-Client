import CustomContainer from "@/components/shared/Container";
import TopCover from "@/components/shared/TopCover.component";
import { neon_font } from "@/fonts";
import React from "react";
import Typical from "react-typical";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

import Image from "next/image";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const ImageData = [
  {
    path: "/topSection/1.jpeg",
  },
  {
    path: "/topSection/2.jpeg",
  },
  {
    path: "/topSection/3.jpeg",
  },
  {
    path: "/topSection/4.jpeg",
  },
  {
    path: "/topSection/5.jpeg",
  },
  {
    path: "/topSection/6.jpeg",
  },
  {
    path: "/topSection/7.jpeg",
  },
  {
    path: "/topSection/8.jpeg",
  },
  {
    path: "/topSection/10.jpeg",
  },
  {
    path: "/topSection/11.jpeg",
  },
  {
    path: "/topSection/12.jpeg",
  },
  {
    path: "/topSection/13.jpeg",
  },
];

const TopSection = () => {
  return (
    <div className="">
      <TopCover height="min-h-[120vh]" imageUrl="/banner-background.jpg">
        <CustomContainer>
          <>
            <div className="flex gap-x-10">
              <div className={`w-[50%]`}>
                <LeftSide />
              </div>

              <div className={`w-[50%]`}>
                <RightSide />
                {/* <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper"
                >
                  {ImageData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={item.path}
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-3/4 h-[500px] rounded-3xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </div>

              {/* <div className={`w-[60%] relative`}>
                <div className="w-[70%] top-0 rounded-3xl bg-gradient-to-r from-[#5956f0] to-[#ff50b8]">
                  <Image
                    src={HeroImage1}
                    alt=""
                    width={1200}
                    height={1200}
                    className="rounded-3xl p-1"
                  />
                </div>

                <div className="absolute top-32 flex justify-end">
                  <div className="w-[50%] rounded-3xl bg-gradient-to-r from-[#5956f0] to-[#ff50b8] overflow-hidden ">
                    <Image
                      src={HeroImage2}
                      alt=""
                      width={1200}
                      height={1200}
                      className="rounded-3xl p-1"
                    />
                  </div>
                </div>

                <div className="absolute top-[85%] left-[40%] w-[150px] h-[150px] rounded-full bg-[#245DFF] flex justify-center items-center">
                  <p className="text-7xl text-white">MRS</p>
                </div>
              </div> */}
            </div>
          </>
        </CustomContainer>
      </TopCover>
    </div>
  );
};

export default TopSection;
