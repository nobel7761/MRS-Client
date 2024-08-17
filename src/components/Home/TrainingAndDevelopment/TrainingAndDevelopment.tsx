import CustomContainer from "@/components/shared/Container";
import Image from "next/image";

const TrainingAndDevelopment = () => {
  return (
    <div className="bg-[#EFECE4] md:py-10">
      <CustomContainer>
        <>
          <div className="flex items-center">
            <Image
              src="/mrs/TrainingAndDevelopment.png"
              alt="top-section-photo"
              height={1200}
              width={1200}
              className="w-2/4"
            />
            <p className="w-2/4 text-7xl font-extrabold">
              Training & Development
            </p>
          </div>

          <p className="text-xl mt-5">
            We work for them, arrange training methodology and find out their
            competency and searching suitable job openings for them. Our work is
            to ensure the environment as if they can introduce themselves with
            own strengths to perform better and create values for the business
            as well as our society.
          </p>
        </>
      </CustomContainer>
    </div>
  );
};

export default TrainingAndDevelopment;
