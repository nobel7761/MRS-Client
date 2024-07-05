import { neon_font } from "@/fonts";
import TopCover from "./shared/TopCover.component";
import CustomContainer from "./shared/Container";
import Typical from "react-typical";
import Image from "next/image";

import HeroImage1 from "../../public/griddle.jpeg";
import HeroImage2 from "../../public/GoongTheCastle.jpeg";
import HeroImage3 from "../../public/MRS-old-logo-removebg-preview.png";
import HeroImage4 from "../../public/MRS-old-logo.png";
import CounterSection from "./Home/CounterSection";
import Intro from "./Home/Intro/Intro";
import Clients from "./Home/Clients/Clients";

const HomeComponent = () => {
  return (
    <div className="">
      <TopCover height="h-screen" imageUrl="/banner-background.jpg">
        {/* <CustomContainer>
          <>
            <div className="flex">
              <div
                className={`w-[40%] font-bold text-5xl uppercase text-neon ${neon_font.className}`}
              >
                <p className="text-3xl">
                  FIND YOUR{" "}
                  <Typical
                    steps={["JOB!", 1000, "MANPOWER!", 1000]}
                    loop={Infinity}
                    wrapper="b"
                  />
                </p>
              </div>

              <div className={`w-[60%] relative`}>
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
              </div>
            </div>
          </>
        </CustomContainer> */}
      </TopCover>
      <Intro />
      <CounterSection />
      <Clients />
      <h1>hello bangladesh</h1>
    </div>
  );
};

export default HomeComponent;
