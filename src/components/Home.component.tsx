import { neon_font } from "@/fonts";
import TopCover from "./shared/TopCover.component";
import CustomContainer from "./shared/Container";
import Typical from "react-typical";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <>
      <TopCover height="h-[75rem]" imageUrl="/banner-background.jpg">
        <CustomContainer>
          <>
            <div className="grid grid-cols-2 gap-x-6">
              <div
                className={`font-bold text-5xl uppercase text-neon ${neon_font.className}`}
              >
                <p>
                  FIND YOUR{" "}
                  <Typical
                    steps={["JOB!", 1000, "MANPOWER!", 1000]}
                    loop={Infinity}
                    wrapper="b"
                  />
                </p>
              </div>

              <div className="text-white">
                <h1>this is another section</h1>
              </div>
            </div>
          </>
        </CustomContainer>
      </TopCover>
      <h2>this is check</h2>
    </>
  );
};

export default HomeComponent;
