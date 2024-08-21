import CustomContainer from "@/components/shared/Container";
import Image from "next/image";

const WhyWeAre = () => {
  return (
    <div className="md:py-10">
      <CustomContainer>
        <>
          <p className="text-center text-5xl font-extrabold pb-10">
            Why We are ?
          </p>
          <div className="flex gap-x-10">
            <div className="w-1/3 flex flex-col gap-y-5">
              <Image
                src="/mrs/whyweare-1.png"
                alt="top-section-photo"
                height={1200}
                width={1200}
                className="w-full h-[250px]"
              />
              <p className="text-center text-xl font-bold">
                Discover work opportunity for people
              </p>
            </div>

            <div className="w-1/3 flex flex-col gap-y-5">
              <Image
                src="/mrs/whyweare-2.png"
                alt="top-section-photo"
                height={1200}
                width={1200}
                className="w-full h-[250px]"
              />
              <p className="text-center text-xl font-bold">
                Unfold manpower as business resource
              </p>
            </div>

            <div className="w-1/3 flex flex-col gap-y-5">
              <Image
                src="/mrs/whyweare-3.png"
                alt="top-section-photo"
                height={1200}
                width={1200}
                className="w-full h-[250px]"
              />
              <p className="text-center text-xl font-bold">
                Sustainable work force
              </p>
            </div>
          </div>
        </>
      </CustomContainer>
    </div>
  );
};

export default WhyWeAre;
