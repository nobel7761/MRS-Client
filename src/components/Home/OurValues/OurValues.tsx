import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { archivo } from "@/fonts";
import Image from "next/image";

const OurValues = () => {
  return (
    <div className="bg-backgroundColor pb-10">
      <CustomContainer>
        <>
          <Title
            text="Our Values"
            className="md:w-1/3 mx-auto hidden md:block"
          />
          <div className="">
            <Title text="Our Values" className="w-full block md:hidden" />
            <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-8">
              <div className="md:w-1/2 w-full">
                <Image
                  src="/mrs/our-values.png"
                  alt="top-section-photo"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-y-8">
                <p className={`text-3xl font-bold`}>
                  We believe that every person has potential — but not everyone
                  gets the opportunity to show it.
                </p>
                <p className="md:text-2xl mt-10 md:mt-0">
                  At Manpower Research & Synchronization, we find
                  underprivileged but capable individuals, help them break
                  through barriers, and prepare them to thrive in workplaces
                  that need them most.
                </p>

                <p className="md:text-2xl">
                  Because when the right person is given the right opportunity,
                  everyone wins — the worker, the company, and the community.
                </p>
              </div>
            </div>
          </div>
        </>
      </CustomContainer>
    </div>
  );
};

export default OurValues;
